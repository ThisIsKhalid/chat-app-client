"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

export default function ContactUsPage() {
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form data
    console.log("Form Submitted", formData);
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Contact Us Hero Section */}
      <section className="text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Got a question or request? We&apos;re here to help you. Fill out the
          form below, and we&apos;ll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="mb-16 py-12 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the contact form to send us your inquiries or feedback.
          </p>
        </div>

        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">
                Contact Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <Button type="submit" className="bg-blue-600 text-white">
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="mb-16 py-12 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Other Ways to Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <Mail className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Send us an email at{" "}
                <a
                  href="mailto:support@quickpay.com"
                  className="text-blue-600 underline"
                >
                  support@quickpay.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <Phone className="h-12 w-12 text-green-600 mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Call us at{" "}
                <a href="tel:+1234567890" className="text-green-600 underline">
                  +1 (234) 567-890
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <CardHeader>
              <MapPin className="h-12 w-12 text-red-600 mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Visit our office at 123 QuickPay Street, San Francisco, CA
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
