"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: "You", text: "Hello, how can I help you today?" },
    { sender: "John", text: "I need assistance with my order." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Chat Section */}
      <section className="text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Real-Time Chat</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Engage in real-time conversations with our advanced chat system.
        </p>
      </section>

      {/* Chat Interface */}
      <section className="mb-16 py-12 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Chat with Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get help instantly by chatting with our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Conversation</h3>
            <div className="border border-gray-300 p-4 rounded-lg h-96 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.sender === "You" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block rounded-lg px-4 py-2 ${
                      message.sender === "You" ? "bg-blue-100" : "bg-gray-100"
                    }`}
                  >
                    <p className="font-semibold">{message.sender}</p>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button
              onClick={handleSendMessage}
              className="w-full sm:w-auto flex items-center gap-2 bg-blue-600 text-white"
            >
              Send <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-16 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our real-time chat system is designed to connect you with our
            support team quickly and efficiently. Here&apos;s how it works:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Step 1 */}
          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
                1
              </div>
              <CardTitle className="text-xl font-semibold">
                Initiate a Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Simply click the &quot;Start Chat&quot; button to begin a conversation
                with our support team.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                2
              </div>
              <CardTitle className="text-xl font-semibold">
                Ask Your Question
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Once the chat starts, type your question or describe the issue
                you&apos;re facing. Our support team is ready to assist.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full mx-auto flex items-center justify-center mb-4">
                3
              </div>
              <CardTitle className="text-xl font-semibold">
                Get Real-time Assistance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Receive immediate responses from our team, resolving your
                queries in real-time without any delays.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-16 py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Need More Help?</h2>
          <p className="text-lg mb-8">
            Reach out to us for dedicated support or specific inquiries.
          </p>
          <Button
            asChild
            className="px-8 py-3 text-lg font-semibold bg-white text-purple-600 hover:bg-gray-100 transition"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
