"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckoutPage } from "@/components/view/CheckoutPage";
import { CreditCard, User, CheckCircle, DollarSign } from "lucide-react";
import Link from "next/link";

const PaymentPage = () => {

  const productDetails = {
    name: "Premium Consultation",
    description: "One-hour consultation with our expert",
    price: 10.50,
    helperId: 1,
    customerEmail: "nahidmahmudn2@gmail.com",
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex flex-col">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Payment Testing Section */}
        <section className="text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-4">Payment Testing</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Test our secure payment integration with this form.
          </p>
        </section>

        {/* Payment Form Section */}
        <section className="mb-16 py-12 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Enter Payment Details
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please fill in the form below to simulate a payment.
            </p>
          </div>

          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <CreditCard className="h-12 w-12 text-primary" />
                  <CardTitle className="text-xl font-semibold ml-2">
                    Payment Information
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold">
                    ${productDetails.price}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      defaultValue={productDetails.customerEmail}
                    />
                  </div>
                  <CheckoutPage
                    helperId={productDetails.helperId}
                    amount={productDetails.price * 100} // Convert to cents for Stripe
                    customerEmail={productDetails.customerEmail}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground text-center">
                  By clicking &quot;Pay Now&quot;, you agree to our Terms of
                  Service and Privacy Policy.
                </p>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* How the Payment System Works Section */}
        <section className="mb-16 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How Our Payment System Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our payment system ensures that helpers receive 70% of the payment
              while the platform owner receives 30%. Here’s how it operates:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <User className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  User Posts Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Users can easily post their requests for help on the platform.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Helper Assists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Helpers can view requests and assist users based on their
                  needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 bg-yellow-100 text-yellow-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Payment Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Payments are split automatically, with 70% going to the helper
                  and 30% to the platform owner.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits of Our Payment System Section */}
        <section className="mb-16 py-12 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Benefits of Our Payment System
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multipart payment system offers a range of benefits for both
              users and helpers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                <CardTitle className="text-xl font-semibold">
                  Fast Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Payments are processed quickly, ensuring timely support for
                  users.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
                <CardTitle className="text-xl font-semibold">
                  Transparent Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Clear fee structures ensure users know exactly what they are
                  paying.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <CardHeader>
                <User className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
                <CardTitle className="text-xl font-semibold">
                  Secure Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  We prioritize security to protect user data and transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16 py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center rounded-lg shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Join our platform today and experience seamless assistance and
              payments.
            </p>
            <Button
              asChild
              className="px-8 py-3 text-lg font-semibold bg-white text-purple-600 hover:bg-gray-100 transition"
            >
              <Link href="/sign-up">Sign Up Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentPage;
