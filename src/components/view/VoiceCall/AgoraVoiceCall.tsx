"use client";

import { useState } from "react";
import {
  useIsConnected,
  useJoin,
  useLocalMicrophoneTrack,
  usePublish,
  useRemoteUsers,
} from "agora-rtc-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, MicOff, PhoneCall, PhoneOff } from "lucide-react";
import Image from "next/image";

const LocalUser = ({ audioTrack, micOn, cover, children }) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
      <Image
        src={cover}
        alt="User avatar"
        width={80}
        height={80}
        className="w-full h-full object-cover"
      />
    </div>
    {children}
    {micOn ? <Mic className="mt-2" /> : <MicOff className="mt-2" />}
  </div>
);

const RemoteUser = ({ cover, user, children }) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
      <Image
        src={cover}
        alt="User avatar"
        width={80}
        height={80}
        className="w-full h-full object-cover"
      />
    </div>
    {children}
  </div>
);

export default function AgoraVoiceCall() {
  const [calling, setCalling] = useState(false);
  const isConnected = useIsConnected();
  const [appId, setAppId] = useState("");
  const [channel, setChannel] = useState("");
  const [token, setToken] = useState("");

  useJoin({ appid: appId, channel: channel, token: token || null }, [calling, appId, channel, token]);


  const [micOn, setMic] = useState(true);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  usePublish([localMicrophoneTrack]);

  const remoteUsers = useRemoteUsers();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          {isConnected ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-4">
                Voice Chat Room
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <LocalUser
                    audioTrack={localMicrophoneTrack}
                    micOn={micOn}
                    cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
                  >
                    <span className="mt-2 text-sm font-medium">You</span>
                  </LocalUser>
                </div>
                {remoteUsers.map((user) => (
                  <RemoteUser
                    key={user.uid}
                    cover="https://www.agora.io/en/wp-content/uploads/2022/10/3d-spatial-audio-icon.svg"
                    user={user}
                  >
                    <span className="mt-2 text-sm font-medium">{user.uid}</span>
                  </RemoteUser>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center mb-4">
                Join Voice Chat
              </h2>
              <Input
                type="text"
                placeholder="Your App ID"
                value={appId}
                onChange={(e) => setAppId(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Channel Name"
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Token (optional)"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              <Button
                className="w-full"
                disabled={!appId || !channel}
                onClick={() => setCalling(true)}
              >
                Join Channel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {isConnected && (
        <div className="mt-4 flex justify-center space-x-4">
          <Button
            variant={micOn ? "default" : "secondary"}
            size="icon"
            onClick={() => setMic((a) => !a)}
          >
            {micOn ? <Mic /> : <MicOff />}
          </Button>
          <Button
            variant={calling ? "destructive" : "default"}
            size="icon"
            onClick={() => setCalling((a) => !a)}
          >
            {calling ? <PhoneOff /> : <PhoneCall />}
          </Button>
        </div>
      )}
    </div>
  );
}
