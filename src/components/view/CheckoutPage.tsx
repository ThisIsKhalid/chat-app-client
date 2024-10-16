"use client";

import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

type CheckoutButtonProps = {
  helperId: number;
  amount: number;
  customerEmail: string;
};

export function CheckoutPage({
  helperId,
  amount,
  customerEmail,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/stripe/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            helperId,
            amount,
            customerEmail,
          }),
        }
      );

      const data = await response.json();
      const sessionId = data?.data;

      // console.log(data, sessionId);

      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });

        if (error) {
          console.error("Error redirecting to checkout:", error);
        }
      } else {
        console.error("Stripe has not been loaded.");
      }
    } catch (error) {
      console.error("Failed to initiate checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleCheckout} disabled={loading} className="w-full">
      {loading ? "Processing..." : "Pay Now"}
    </Button>
  );
}
