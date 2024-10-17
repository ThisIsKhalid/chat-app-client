"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ShieldCheck, Wifi } from "lucide-react";
import AgoraVoiceCall from "./AgoraVoiceCall";

export default function VoiceCallPage() {
   
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Voice Call Hero Section */}
      <section className="text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Crystal-clear Voice Calls</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Experience high-quality, seamless voice communication on our platform.
        </p>
        <div className="mt-8">
          <Button className="px-8 py-3 text-lg font-semibold bg-white text-primary hover:bg-gray-100 transition">
            Start a Voice Call
          </Button>
        </div>
      </section>

      {/* How Voice Call Works Section */}
      <section className="mb-16 py-12 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our voice call feature provides crystal-clear quality, making it
            easy to communicate without interruptions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Easy to Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Simply press the &quot;Start Voice Call&quot; button to initiate
                a call.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Stable Connection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Our platform ensures a stable connection for a smooth voice
                experience.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Secure and Private
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Our calls are encrypted, ensuring your privacy and security
                during communication.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits of Voice Calls Section */}
      <section className="mb-16 py-12 bg-gradient-to-r from-white via-gray-100 to-white rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Voice Calls?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform offers high-quality voice calls that ensure clarity,
            security, and convenience for all users.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <Phone className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">
                Clear Audio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Enjoy high-definition voice quality with minimal disruptions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <ShieldCheck className="h-12 w-12 text-green-600 mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">
                Encrypted Calls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                All voice calls are encrypted to protect your data and
                conversations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <Wifi className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">No Lag</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Our robust infrastructure ensures that you experience no lag or
                connectivity issues.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-16 py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start a Voice Call?
          </h2>
          <p className="text-lg mb-8">
            Get in touch with our experts through crystal-clear voice calls.
          </p>
          <Button
            asChild
            className="px-8 py-3 text-lg font-semibold bg-white text-purple-600 hover:bg-gray-100 transition"
          >
            <a href="/call-now">Call Now</a>
          </Button>
        </div>
      </section>

      {/* ---------------------------agora----------------------- */}
      <AgoraVoiceCall />
    </main>
  );
}
