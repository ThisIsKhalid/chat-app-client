import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function PaymentCancelledPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex flex-col">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-16 w-16 text-yellow-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">
              Payment Cancelled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              Your payment has been cancelled. No charges have been made to your
              account.
            </p>
            <div className="space-y-4">
              <div className="bg-secondary/50 p-4 rounded-md">
                <h3 className="font-semibold text-foreground">
                  What happened?
                </h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>The transaction was not completed</li>
                  <li>Your account has not been charged</li>
                  <li>Any reserved amount will be released shortly</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                If you encountered any issues or have questions, please dont
                hesitate to contact our support team.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button asChild className="w-full">
              <Link href="/checkout">Try Again</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/support">Contact Support</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
