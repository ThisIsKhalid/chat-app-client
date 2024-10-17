"use client";

import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

export default function AgoraProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

  return (
    <>
      <AgoraRTCProvider client={client}>{children}</AgoraRTCProvider>
    </>
  );
}
