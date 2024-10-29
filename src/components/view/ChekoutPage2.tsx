"use client";

import { Button } from "@/components/ui/button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

type CheckoutButtonProps = {
  name: string;
  email: string;
};

export function SignupPage({ name, email }: CheckoutButtonProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true); // Start loading

    if (!name || !email) {
      console.log("Name and email are required");
      setLoading(false); // Stop loading
      return;
    }

    if (!stripe || !elements) {
      console.error("Stripe.js has not yet loaded.");
      setLoading(false); // Stop loading
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      console.error("Card element not found");
      setLoading(false); // Stop loading
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: name,
        email: email,
      },
    });

    setLoading(false); // Stop loading after the process

    if (error) {
      console.error(error);
    } else {
      // Send the paymentMethod.id to your backend for processing
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/sign-up-customer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email,
            paymentMethodId: paymentMethod.id, // Use the tokenized payment method
          }),
        }
      );

      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Processing..." : "Signup"}
        </Button>
      </form>
    </div>
  );
}
