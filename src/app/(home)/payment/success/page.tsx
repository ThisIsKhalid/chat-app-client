'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage() {
  // const router = useRouter();
  // const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  // const { session_id } = router.query; // Get session ID from URL

  // useEffect(() => {
  //   if (session_id) {
  //     // Call your backend to verify the session
  //     fetch(`/api/payment/verify-session?session_id=${session_id}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setPaymentStatus(data.paymentStatus); // Handle the payment status response
  //       })
  //       .catch((error) => {
  //         console.error("Error verifying session:", error);
  //         setPaymentStatus("Error");
  //       });
  //   }
  // }, [session_id]);

  // if (!session_id) {
  //   return <p>Loading...</p>; // Handle case where session_id is not yet available
  // }
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex flex-col">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">
              Payment Successful!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              Thank you for your purchase. Your payment has been processed
              successfully.
            </p>
            <div className="space-y-4">
              <div className="bg-secondary/50 p-4 rounded-md">
                <h3 className="font-semibold text-foreground">
                  Order Details:
                </h3>
                <p className="text-sm text-muted-foreground">
                  Order #: 1234567890
                </p>
                <p className="text-sm text-muted-foreground">Amount: $99.99</p>
                <p className="text-sm text-muted-foreground">
                  Date: {new Date().toLocaleDateString()}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to your registered email
                address.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button asChild className="w-full">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/support">Need Help?</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
