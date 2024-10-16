'use client'

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="mb-16 py-12 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions? We’ve got answers. Find out more about how FeatureTest
          can help you achieve your goals.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-4">
        {/* FAQ 1 */}
        <Collapsible open={openFAQ === 1} onOpenChange={() => toggleFAQ(1)}>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
            <CollapsibleTrigger className="w-full flex justify-between items-center text-left">
              <h3 className="text-xl font-semibold">
                Is there a free trial available?
              </h3>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openFAQ === 1 ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 text-sm text-gray-600">
              Yes, we offer a 14-day free trial for new users to test all
              features without any limitations.
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* FAQ 2 */}
        <Collapsible open={openFAQ === 2} onOpenChange={() => toggleFAQ(2)}>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
            <CollapsibleTrigger className="w-full flex justify-between items-center text-left">
              <h3 className="text-xl font-semibold">
                Can I cancel my subscription at any time?
              </h3>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openFAQ === 2 ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 text-sm text-gray-600">
              Absolutely! You can cancel your subscription anytime, and you
              won’t be charged for the next billing cycle.
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* FAQ 3 */}
        <Collapsible open={openFAQ === 3} onOpenChange={() => toggleFAQ(3)}>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
            <CollapsibleTrigger className="w-full flex justify-between items-center text-left">
              <h3 className="text-xl font-semibold">
                What payment methods do you accept?
              </h3>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openFAQ === 3 ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 text-sm text-gray-600">
              We accept all major credit cards, PayPal, and wire transfers for
              enterprise clients.
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </section>
  );
}
