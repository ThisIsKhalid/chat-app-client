"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail, Twitter, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="bg-muted mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Zap className="h-6 w-6 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground">
                FeatureTest
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering your digital journey with cutting-edge features and
              seamless experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-r-none"
                  required
                />
                <Button type="submit" className="rounded-l-none">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FeatureTest. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
