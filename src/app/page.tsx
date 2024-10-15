import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCard, MessageSquare, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <header className="bg-background shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="ml-2 text-xl font-bold text-foreground">
              FeatureTest
            </span>
          </div>
          <nav>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to FeatureTest
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our cutting-edge features: Secure Payments, Real-time Chat,
            and Voice Calls.
          </p>
        </section>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CreditCard className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Payment Testing</CardTitle>
              <CardDescription>
                Test our secure payment integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Experience a seamless checkout process with our state-of-the-art
                payment system.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/payment">Try Payment</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Chat Feature</CardTitle>
              <CardDescription>
                Test our real-time chat functionality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Engage in real-time conversations with our advanced chat system.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/chat">Start Chatting</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Phone className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Voice Call</CardTitle>
              <CardDescription>
                Test our crystal-clear voice call feature
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Experience high-quality voice calls with our cutting-edge audio
                technology.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/call">Make a Call</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="bg-background border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-muted-foreground text-sm">
            &copy; 2023 FeatureTest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
