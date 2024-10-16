"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Rocket, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* About Us Hero Section */}
      <section className="text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Learn more about our mission, our team, and how we are revolutionizing
          the world of online services.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mb-16 py-12 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We aim to provide a seamless digital experience through innovative,
            secure, and efficient solutions. Our goal is to empower users and
            businesses to achieve more through our platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Innovation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                We are constantly exploring new ways to deliver cutting-edge
                features that make your life easier.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-semibold">Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Our platform prioritizes security, ensuring that your data is
                safe, your transactions are secure, and your experience is
                worry-free.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-semibold">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                We believe in building a strong community of users who support
                each other and grow together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="mb-16 py-12 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team is made up of passionate, talented individuals dedicated to
            bringing you the best possible experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <Image
                src="/team-member3.jpg"
                alt="Team Member 3"
                width={128}
                height={128}
                className="h-32 w-32 rounded-full mx-auto mb-4"
              />
              <CardTitle className="text-xl font-semibold">John Doe</CardTitle>
              <p className="text-sm text-gray-500">CEO & Founder</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                John is the visionary behind our platform, bringing years of
                experience in technology and leadership.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <Image
                src="/team-member3.jpg"
                alt="Team Member 3"
                width={128}
                height={128}
                className="h-32 w-32 rounded-full mx-auto mb-4"
              />
              <CardTitle className="text-xl font-semibold">
                Jane Smith
              </CardTitle>
              <p className="text-sm text-gray-500">CTO</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Jane leads our technical team with her expertise in software
                development and system architecture.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <Image
                src="/team-member3.jpg"
                alt="Team Member 3"
                width={128}
                height={128}
                className="h-32 w-32 rounded-full mx-auto mb-4"
              />
              <CardTitle className="text-xl font-semibold">
                Mike Johnson
              </CardTitle>
              <p className="text-sm text-gray-500">COO</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Mike ensures everything runs smoothly, managing operations and
                making sure our users are happy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mb-16 py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg mb-8">
            Be a part of our growing community. Discover how our platform can
            help you achieve your goals.
          </p>
          <Button
            asChild
            className="px-8 py-3 text-lg font-semibold bg-white text-purple-600 hover:bg-gray-100 transition"
          >
            <a href="/sign-up">Get Started Today</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
