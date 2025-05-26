import FaqForm from "@/components/forms/faq-form";
import { Lightbulb } from "lucide-react";

export const metadata = {
  title: "FAQ - Synergy Insights",
  description: "Get answers to your questions about UX and Human Factors consulting using our dynamic AI-powered FAQ.",
};

export default function FAQPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Have questions about how UX and Human Factors consulting can benefit your specific industry? Use our AI-powered FAQ to get instant, tailored answers.
        </p>
      </section>

      <section className="max-w-2xl mx-auto p-6 sm:p-8 bg-card rounded-lg shadow-xl">
        <div className="flex items-center text-brand-primary mb-6">
          <Lightbulb className="w-8 h-8 mr-3" />
          <h2 className="text-2xl font-semibold">Ask Our AI Assistant</h2>
        </div>
        <FaqForm />
      </section>
    </div>
  );
}
