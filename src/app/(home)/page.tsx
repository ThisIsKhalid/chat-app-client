
import boy from "../../assets/boy.png"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FAQSection from "@/components/view/Home/FAQ";
import {
  CreditCard,
  MessageSquare,
  Phone,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to FeatureTest</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover the future of digital experiences with our cutting-edge
          features: Secure Payments, Real-time Chat, and Crystal-clear Voice
          Calls.
        </p>
        <div className="mt-8">
          <Button className="px-8 py-3 text-lg font-semibold bg-white text-primary hover:bg-gray-100 transition">
            <Link href="/get-started">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16 py-12 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Core Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the advanced features that make FeatureTest your go-to
            platform for seamless digital experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="text-center">
              <CreditCard className="h-12 w-12 text-primary mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">
                Payment Testing
              </CardTitle>
              <CardDescription>
                Test our secure payment integration
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground text-center">
                Experience a seamless checkout process with our state-of-the-art
                payment system.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <Link href="/payment">Try Payment</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="text-center">
              <MessageSquare className="h-12 w-12 text-primary mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">
                Chat Feature
              </CardTitle>
              <CardDescription>
                Test our real-time chat functionality
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground text-center">
                Engage in real-time conversations with our advanced chat system.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <Link href="/chat">Start Chatting</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="text-center">
              <Phone className="h-12 w-12 text-primary mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">
                Voice Call
              </CardTitle>
              <CardDescription>
                Test our crystal-clear voice call feature
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground text-center">
                Experience high-quality voice calls with our cutting-edge audio
                technology.
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <Link href="/call">Make a Call</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative mb-16 py-12">
        <div className="absolute inset-0 -z-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f5f7fa"
              fillOpacity="1"
              d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,80C672,64,768,96,864,128C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose FeatureTest?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            FeatureTest provides unmatched security, speed, and customer
            support. Learn why our users trust us to power their digital
            experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-tr from-green-100 to-blue-50 text-center border border-gray-200 rounded-lg p-6 shadow-md transition-transform hover:scale-105">
            <CardHeader>
              <ShieldCheck className="h-12 w-12 text-green-500 mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">
                Top-notch Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                We adhere to the latest security protocols to ensure your data
                and transactions are fully protected.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-tr from-yellow-100 to-pink-50 text-center border border-gray-200 rounded-lg p-6 shadow-md transition-transform hover:scale-105">
            <CardHeader>
              <Rocket className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">
                Fast & Reliable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                FeatureTest is designed for optimal speed, making sure you enjoy
                the best performance at all times.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-tr from-red-100 to-orange-50 text-center border border-gray-200 rounded-lg p-6 shadow-md transition-transform hover:scale-105">
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-red-500 mb-4 mx-auto" />
              <CardTitle className="text-xl font-semibold">
                24/7 Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Our dedicated support team is available around the clock to help
                you with any issues or queries.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="mb-16 py-12 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Affordable Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a plan that best suits your business needs. No hidden fees,
            no surprise charges.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Basic</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">
                $19
                <span className="text-lg font-medium text-gray-600">
                  /month
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Perfect for individuals or small teams getting started.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li>✔️ Up to 10 users</li>
                <li>✔️ Basic Support</li>
                <li>✔️ Access to Core Features</li>
              </ul>
            </div>
            <div className="mt-auto p-6 bg-gray-100 text-center">
              <Button
                asChild
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                <Link href="/pricing">Choose Basic</Link>
              </Button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Standard</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">
                $49
                <span className="text-lg font-medium text-gray-600">
                  /month
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Ideal for growing teams looking for more flexibility.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li>✔️ Up to 50 users</li>
                <li>✔️ Priority Support</li>
                <li>✔️ Access to All Features</li>
              </ul>
            </div>
            <div className="mt-auto p-6 bg-gray-100 text-center">
              <Button
                asChild
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                <Link href="/pricing">Choose Standard</Link>
              </Button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Premium</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">
                $99
                <span className="text-lg font-medium text-gray-600">
                  /month
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Best for large teams needing advanced features and dedicated
                support.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li>✔️ Unlimited users</li>
                <li>✔️ 24/7 Dedicated Support</li>
                <li>✔️ Advanced Security Features</li>
              </ul>
            </div>
            <div className="mt-auto p-6 bg-gray-100 text-center">
              <Button
                asChild
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                <Link href="/pricing">Choose Premium</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mb-16 py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-lg mb-8">
            Join hundreds of businesses that are already leveraging
            FeatureTest&apos;s cutting-edge technology to enhance their
            operations.
          </p>
          <Button
            asChild
            className="px-8 py-3 text-lg font-semibold bg-white text-purple-600 hover:bg-gray-100 transition"
          >
            <Link href="/sign-up">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16 py-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the people who have transformed their digital experiences
            with FeatureTest.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src={boy}
                alt="Client 1"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-lg">John Doe</h4>
                <p className="text-sm text-gray-600">CEO, TechCorp</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              FeatureTest has completely changed how we handle payments and
              client communication. It&apos;s seamless and incredibly efficient.
            </p>
          </div>

          <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src={boy}
                alt="Client 2"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-lg">Jane Smith</h4>
                <p className="text-sm text-gray-600">Founder, StartupInc</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              The real-time chat feature is a game-changer for our customer
              support. We can&apos;t imagine working without it.
            </p>
          </div>

          <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src={boy}
                alt="Client 3"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-lg">Michael Lee</h4>
                <p className="text-sm text-gray-600">COO, Global Solutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              We&apos;ve seen a noticeable improvement in call quality since
              switching to FeatureTest for our internal voice communications.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection />
    </main>
  );
}
