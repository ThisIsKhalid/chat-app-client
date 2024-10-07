/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface Message {
  id: number;
  chatId: number;
  senderId: number;
  content: string;
  senderRole: "CUSTOMER" | "HELPER";
  createdAt: string;
}

export default function ChatPage({ params }: { params: { orderId: string } }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [isTyping, setIsTyping] = useState<string | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [senderId, setSenderId] = useState<number | null>(null);
  const [senderRole, setSenderRole] = useState<"CUSTOMER" | "HELPER" | "">("");
  const [userInfoSet, setUserInfoSet] = useState<boolean>(false);

  const [chat, setChat] = useState<any>(null);

  const orderId = params.orderId;

  useEffect(() => {
    const fetchChat = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/chats/${orderId}`
      );
      const data = response.data?.data;
      setChat(data);
    };

    fetchChat();
  }, [orderId]);

  useEffect(() => {
    // Check if senderId and senderRole are stored in local storage
    const storedSenderId = localStorage.getItem("senderId");
    const storedSenderRole = localStorage.getItem("senderRole");

    if (storedSenderId && storedSenderRole) {
      setSenderId(Number(storedSenderId));
      setSenderRole(storedSenderRole as "CUSTOMER" | "HELPER");
      setUserInfoSet(true);
    }
  }, []);

  useEffect(() => {
    if (!orderId || !userInfoSet) return;

    const socketInstance = io("http://localhost:5000"); // Replace with your server URL
    setSocket(socketInstance);

    // Join the room
    socketInstance.emit("joinRoom", orderId);

    // Listen for previous messages
    socketInstance.on("loadMessages", (messages: Message[]) => {
      setMessages(messages);
    });

    // Listen for new messages
    socketInstance.on("receiveMessage", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Listen for typing indicator
    socketInstance.on("typing", (data) => {
      setIsTyping(`${data.username} is typing...`);
      setTimeout(() => setIsTyping(null), 3000);
    });

    // Clean up on unmount
    return () => {
      socketInstance.disconnect();
    };
  }, [orderId, userInfoSet]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !socket || !senderId || !senderRole) return;

    socket.emit("sendMessage", {
      orderId: orderId,
      chatId: chat.id,
      senderId,
      content: newMessage,
      senderRole,
    });

    setNewMessage("");
  };

  const handleTyping = () => {
    socket?.emit("typing", {
      chatroomId: orderId,
      username: senderRole,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderId || senderRole === "") return;

    // Store senderId and senderRole in local storage
    localStorage.setItem("senderId", senderId.toString());
    localStorage.setItem("senderRole", senderRole);

    setUserInfoSet(true);
  };

  if (!userInfoSet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleFormSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <h2 className="text-xl font-semibold">Enter Your Details</h2>
          <div>
            <label className="block text-gray-700">User ID</label>
            <input
              type="number"
              value={senderId || ""}
              onChange={(e) => setSenderId(Number(e.target.value))}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter your user ID"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Role</label>
            <select
              value={senderRole}
              onChange={(e) =>
                setSenderRole(e.target.value as "CUSTOMER" | "HELPER")
              }
              className="w-full border rounded-lg p-2 mt-1"
              required
            >
              <option value="">Select your role</option>
              <option value="CUSTOMER">Customer</option>
              <option value="HELPER">Helper</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg"
          >
            Join Chat
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-white p-4 shadow-md flex items-center justify-between">
        <h1 className="text-xl font-semibold">Chat Room: {orderId}</h1>
        <h1 className="text-blue-500 text-2xl font-bold">
          {senderRole === "CUSTOMER" ? "Customer" : "Helper"}
        </h1>
        <button
          onClick={() => {
            localStorage.removeItem("senderId");
            localStorage.removeItem("senderRole");
            setUserInfoSet(false);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Leave Chat
        </button>
      </div>

      {messages.length > 0 ? (
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-2 p-2 rounded-lg ${
                message.senderRole === "CUSTOMER"
                  ? "bg-blue-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              <div className="text-sm">
                {message.senderRole}: {message.content}
              </div>
              <div className="text-xs text-gray-300">
                {new Date(message.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
          {isTyping && <div className="text-gray-500">{isTyping}</div>}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          No messages yet
        </div>
      )}
      <div className="p-4 bg-white flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleTyping}
          placeholder="Type your message..."
          className="flex-1 border rounded-lg p-2"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
