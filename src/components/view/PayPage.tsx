'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Apple } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1524883173980-67b26d34e82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHwwfDB8fHwy",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1524883173980-67b26d34e82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHwwfDB8fHwy",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1524883173980-67b26d34e82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHwwfDB8fHwy",
  },
  {
    id: 4,
    name: "4K Monitor",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1524883173980-67b26d34e82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHwwfDB8fHwy",
  },
];

type PaymentMethod = "credit-card" | "apple-pay";

export default function PayPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("credit-card");

  const handlePaymentMethodChange = (value: PaymentMethod) => {
    setPaymentMethod(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>${product.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="w-full"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Pay Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>
                      Payment for {selectedProduct?.name}
                    </DialogTitle>
                    <DialogDescription>
                      Choose your payment method and enter details to complete
                      the purchase.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <RadioGroup
                      defaultValue="credit-card"
                      className="grid grid-cols-3 gap-4"
                      onValueChange={handlePaymentMethodChange}
                    >
                      <div>
                        <RadioGroupItem
                          value="credit-card"
                          id="credit-card"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="credit-card"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <CreditCard className="mb-3 h-6 w-6" />
                          Credit Card
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="apple-pay"
                          id="apple-pay"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="apple-pay"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Apple className="mb-3 h-6 w-6" />
                          Apple Pay
                        </Label>
                      </div>
                    </RadioGroup>
                    {paymentMethod === "credit-card" && (
                      <>
                        <div className="grid gap-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="expiry-month">Expiry Month</Label>
                            <Input id="expiry-month" placeholder="MM" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="expiry-year">Expiry Year</Label>
                            <Input id="expiry-year" placeholder="YY" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <DialogFooter>
                    <Button type="submit">
                      Pay ${selectedProduct?.price.toFixed(2)}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
