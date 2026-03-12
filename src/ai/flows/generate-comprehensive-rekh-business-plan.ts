'use server';
/**
 * @fileOverview This file implements a Genkit flow that orchestrates several AI agents
 * to generate a comprehensive business plan based on a user-provided business concept.
 *
 * - generateComprehensiveRekhBusinessPlan - A function that triggers the business plan generation process.
 * - GenerateComprehensiveRekhBusinessPlanInput - The input type for the generateComprehensiveRekhBusinessPlan function.
 * - GenerateComprehensiveRekhBusinessPlanOutput - The return type for the generateComprehensiveRekhBusinessPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// --- Main Flow Schemas ---
const GenerateComprehensiveRekhBusinessPlanInputSchema = z.object({
  businessConcept: z
    .string()
    .describe(
      'A detailed description of the business idea or concept for which the plan needs to be generated.'
    ),
});
export type GenerateComprehensiveRekhBusinessPlanInput = z.infer<
  typeof GenerateComprehensiveRekhBusinessPlanInputSchema
>;

const GenerateComprehensiveRekhBusinessPlanOutputSchema = z.object({
  businessPlan: z.string().describe('The comprehensive, formal business plan.'),
});
export type GenerateComprehensiveRekhBusinessPlanOutput = z.infer<
  typeof GenerateComprehensiveRekhBusinessPlanOutputSchema
>;

// --- Researcher Agent Schemas ---
const ResearcherInputSchema = z.object({
  businessConcept: z.string(),
});
const ResearcherOutputSchema = z.object({
  marketData: z
    .string()
    .describe(
      'A summary of current South African market data and industry trends relevant to the business concept.'
    ),
});

// --- Financial Agent Schemas ---
const FinancialInputSchema = z.object({
  businessConcept: z.string(),
  marketData: z.string(),
});
const FinancialOutputSchema = z.object({
  financialProjections: z
    .string()
    .describe(
      'Realistic 5-year financial projections, including SA VAT (15%) and corporate tax.'
    ),
});

// --- Architect Agent Schemas ---
const ArchitectInputSchema = z.object({
  businessConcept: z.string(),
  marketData: z.string(),
  financialProjections: z.string(),
});
const ArchitectOutputSchema = z.object({
  businessPlan: z.string().describe('The comprehensive, formal business plan.'),
});

// --- Agent Prompts ---
const researcherPrompt = ai.definePrompt({
  name: 'researcherPrompt',
  input: {schema: ResearcherInputSchema},
  output: {schema: ResearcherOutputSchema},
  config: {
    model: 'googleai/gemini-1.5-pro-latest',
    temperature: 0.7,
  },
  prompt: `You are an expert market researcher specializing in South African business. 
Based on the following business concept, provide a summary of current South African market data and industry trends relevant to this concept. 
Focus on opportunities, challenges, and key statistics. Be concise and provide actionable insights.

Business Concept: {{{businessConcept}}}

Format your output as a string summarizing the market data.`,
});

const financialPrompt = ai.definePrompt({
  name: 'financialPrompt',
  input: {schema: FinancialInputSchema},
  output: {schema: FinancialOutputSchema},
  config: {
    model: 'googleai/gemini-1.5-pro-latest',
    temperature: 0.7,
  },
  prompt: `You are an expert financial analyst for South African businesses. 
Based on the provided business concept and market data, calculate realistic 5-year financial projections. 
Include revenue forecasts, operational costs, profit margins, and net profit. Ensure you factor in South African VAT (15%) and corporate tax rates. 
Present your findings clearly and professionally.

Business Concept: {{{businessConcept}}}
Market Data: {{{marketData}}}

Format your output as a string summarizing the 5-year financial projections.`,
});

const architectPrompt = ai.definePrompt({
  name: 'architectPrompt',
  input: {schema: ArchitectInputSchema},
  output: {schema: ArchitectOutputSchema},
  config: {
    model: 'googleai/gemini-1.5-pro-latest',
    temperature: 0.7,
  },
  prompt: `You are an expert business architect. Your task is to compile a comprehensive, formal business plan 
using the provided business concept, market research data, and financial projections. 
Structure the plan professionally, covering key sections such as Executive Summary, Company Description, 
Market Analysis, Organization & Management, Service/Product Line, Marketing & Sales Strategy, and Financial Projections. 
Ensure a cohesive and persuasive narrative.

Business Concept: {{{businessConcept}}}
Market Data: {{{marketData}}}
Financial Projections: {{{financialProjections}}}`,
});

export async function generateComprehensiveRekhBusinessPlan(
  input: GenerateComprehensiveRekhBusinessPlanInput
): Promise<GenerateComprehensiveRekhBusinessPlanOutput> {
  return generateComprehensiveRekhBusinessPlanFlow(input);
}

const generateComprehensiveRekhBusinessPlanFlow = ai.defineFlow(
  {
    name: 'generateComprehensiveRekhBusinessPlanFlow',
    inputSchema: GenerateComprehensiveRekhBusinessPlanInputSchema,
    outputSchema: GenerateComprehensiveRekhBusinessPlanOutputSchema,
  },
  async (input) => {
    // Agent 1: Researcher
    const researcherResult = await researcherPrompt({
      businessConcept: input.businessConcept,
    });
    const marketData = researcherResult.output!.marketData;

    // Agent 2: Financial Analyst
    const financialResult = await financialPrompt({
      businessConcept: input.businessConcept,
      marketData: marketData,
    });
    const financialProjections = financialResult.output!.financialProjections;

    // Agent 3: Architect
    const architectResult = await architectPrompt({
      businessConcept: input.businessConcept,
      marketData: marketData,
      financialProjections: financialProjections,
    });
    const businessPlan = architectResult.output!.businessPlan;

    return {businessPlan};
  }
);
