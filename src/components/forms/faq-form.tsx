"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { answerQuestion, AnswerQuestionInput } from "@/ai/flows/dynamic-faq";
import { industrySpecificServices } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

const faqFormSchema = z.object({
  industry: z.enum(['oil and gas', 'aerospace', 'medical', 'CPA', 'legal'], {
    required_error: "Please select an industry.",
  }),
  question: z.string().min(10, {
    message: "Question must be at least 10 characters.",
  }).max(500, {
    message: "Question must not exceed 500 characters.",
  }),
});

type FaqFormValues = z.infer<typeof faqFormSchema>;

export default function FaqForm() {
  const [isPending, startTransition] = useTransition();
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FaqFormValues>({
    resolver: zodResolver(faqFormSchema),
    defaultValues: {
      question: "",
    },
  });

  function onSubmit(data: FaqFormValues) {
    setAiAnswer(null);
    startTransition(async () => {
      try {
        const input: AnswerQuestionInput = {
          industry: data.industry,
          question: data.question,
        };
        const result = await answerQuestion(input);
        setAiAnswer(result.answer);
        toast({
          title: "Answer Generated",
          description: "The AI has provided an answer to your question.",
        });
      } catch (error) {
        console.error("Error getting answer:", error);
        setAiAnswer("Sorry, I couldn't fetch an answer at this time. Please try again later.");
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to generate an answer. Please try again.",
        });
      }
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Industry</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {industrySpecificServices.map((industry) => (
                      <SelectItem key={industry.id} value={industry.id as FaqFormValues['industry']}>
                        {industry.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Question</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., How can UX improve safety in aerospace?"
                    className="resize-none min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Get Answer
          </Button>
        </form>
      </Form>

      {aiAnswer && (
        <Card className="mt-8 bg-background shadow-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center text-brand-primary">
              <Wand2 className="mr-2 h-5 w-5" /> AI Generated Answer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 whitespace-pre-line">{aiAnswer}</p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
