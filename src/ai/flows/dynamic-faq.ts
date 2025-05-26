// src/ai/flows/dynamic-faq.ts
'use server';

/**
 * @fileOverview A dynamic FAQ AI agent that answers questions based on industry-specific knowledge bases.
 *
 * - answerQuestion - A function that answers a question based on the industry.
 * - AnswerQuestionInput - The input type for the answerQuestion function.
 * - AnswerQuestionOutput - The return type for the answerQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionInputSchema = z.object({
  industry: z
    .enum(['oil and gas', 'aerospace', 'medical', 'CPA', 'legal'])
    .describe('The industry to fetch the knowledge base from.'),
  question: z.string().describe('The question to answer.'),
});
export type AnswerQuestionInput = z.infer<typeof AnswerQuestionInputSchema>;

const AnswerQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type AnswerQuestionOutput = z.infer<typeof AnswerQuestionOutputSchema>;

export async function answerQuestion(input: AnswerQuestionInput): Promise<AnswerQuestionOutput> {
  return answerQuestionFlow(input);
}

const getKnowledgeBase = ai.defineTool(
  {
    name: 'getKnowledgeBase',
    description: 'Retrieves the knowledge base for a specific industry.',
    inputSchema: z.object({
      industry: z
        .enum(['oil and gas', 'aerospace', 'medical', 'CPA', 'legal'])
        .describe('The industry to fetch the knowledge base from.'),
    }),
    outputSchema: z.string().describe('The knowledge base content.'),
  },
  async input => {
    // TODO: Implement the logic to fetch the knowledge base from a data source.
    // This is a placeholder; replace with actual data retrieval.
    console.log(`Fetching knowledge base for ${input.industry}`);
    switch (input.industry) {
      case 'oil and gas':
        return `The oil and gas industry benefits from UX by improving safety protocols and optimizing workflows. Human factors consulting helps reduce accidents and increase efficiency in drilling operations.`;
      case 'aerospace':
        return `In aerospace, UX and human factors are crucial for designing intuitive cockpit interfaces and ensuring pilot safety. Consulting services focus on minimizing errors and enhancing performance under pressure.`;
      case 'medical':
        return `The medical field relies on UX to create user-friendly medical devices and software. Human factors consulting ensures that healthcare professionals can use these tools effectively, reducing the risk of medical errors.`;
      case 'CPA':
        return `CPA firms can leverage UX to simplify complex financial software and improve client portals. Human factors consulting helps accountants and clients navigate financial data more efficiently.`;
      case 'legal':
        return `Legal firms use UX to design clear and accessible legal documents and online platforms. Human factors consulting ensures that legal information is easily understood by both lawyers and clients.`;
      default:
        return 'No specific knowledge base available for this industry.';
    }
  }
);

const answerQuestionPrompt = ai.definePrompt({
  name: 'answerQuestionPrompt',
  tools: [getKnowledgeBase],
  input: {schema: AnswerQuestionInputSchema},
  output: {schema: AnswerQuestionOutputSchema},
  prompt: `You are an AI assistant designed to answer questions about UX and human factors consulting based on industry-specific knowledge.

  First, retrieve the knowledge base for the specified industry using the getKnowledgeBase tool.
  Then, answer the user's question using the information from the knowledge base.

  Industry: {{{industry}}}
  Question: {{{question}}}

  Answer:`,
});

const answerQuestionFlow = ai.defineFlow(
  {
    name: 'answerQuestionFlow',
    inputSchema: AnswerQuestionInputSchema,
    outputSchema: AnswerQuestionOutputSchema,
  },
  async input => {
    const {output} = await answerQuestionPrompt(input);
    return output!;
  }
);
