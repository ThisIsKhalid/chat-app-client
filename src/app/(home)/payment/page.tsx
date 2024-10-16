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
import React from "react";

const Payment = () => {
  const productDetails = {
    name: "Premium Consultation",
    description: "One-hour consultation with our expert",
    price: 300,
    helperId: 1,
    customerEmail: "iamkhalid.hs@gmail.com",
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex flex-col">
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
              QuickPay
            </span>
          </div>
          <nav>
            <Button variant="ghost">Help</Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {productDetails.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              {productDetails.description}
            </p>
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl font-bold">
                ${productDetails.price}
              </span>
            </div>
            <div className="space-y-4">
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
              By clicking &quot;Pay Now&quot;, you agree to our Terms of Service
              and Privacy Policy.
            </p>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-muted-foreground text-sm">
            &copy; 2023 QuickPay. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Payment;
