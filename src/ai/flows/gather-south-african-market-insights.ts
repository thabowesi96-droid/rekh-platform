'use server';
/**
 * @fileOverview A Genkit flow for the Researcher Agent to gather and summarize South African market data and industry trends using Google Search Grounding.
 *
 * - gatherSouthAfricanMarketInsights - A function that initiates market research for a specific industry or product within South Africa.
 * - GatherSouthAfricanMarketInsightsInput - The input type for the gatherSouthAfricanMarketInsights function.
 * - GatherSouthAfricanMarketInsightsOutput - The return type for the gatherSouthAfricanMarketInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const GatherSouthAfricanMarketInsightsInputSchema = z.object({
  industryOrProduct: z
    .string()
    .describe(
      'The specific industry or product in South Africa for which to gather market data and industry trends.'
    ),
});
export type GatherSouthAfricanMarketInsightsInput = z.infer<
  typeof GatherSouthAfricanMarketInsightsInputSchema
>;

// Output Schema
const GatherSouthAfricanMarketInsightsOutputSchema = z.object({
  marketDataSummary: z
    .string()
    .describe('A comprehensive summary of current South African market data.'),
  industryTrendsSummary: z
    .string()
    .describe('A comprehensive summary of current South African industry trends.'),
});
export type GatherSouthAfricanMarketInsightsOutput = z.infer<
  typeof GatherSouthAfricanMarketInsightsOutputSchema
>;

export async function gatherSouthAfricanMarketInsights(
  input: GatherSouthAfricanMarketInsightsInput
): Promise<GatherSouthAfricanMarketInsightsOutput> {
  return gatherSouthAfricanMarketInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'southAfricanMarketResearchPrompt',
  input: {schema: GatherSouthAfricanMarketInsightsInputSchema},
  output: {schema: GatherSouthAfricanMarketInsightsOutputSchema},
  prompt: `You are a Researcher Agent specializing in South African market analysis. Your task is to find and summarize current, up-to-date market data and industry trends for the specified industry or product within South Africa.
    
    You MUST use Google Search to find current and reliable information. Prioritize reputable South African sources if available.
    
    Focus on quantitative data, key players, growth projections, consumer behavior, and any relevant economic indicators specific to South Africa. For industry trends, identify emerging technologies, regulatory changes, competitive landscape shifts, and innovation.
    
    Industry/Product to research in South Africa: {{{industryOrProduct}}}
    
    Please provide two distinct summaries formatted as JSON, corresponding to the output schema provided:
    {
      "marketDataSummary": "...",
      "industryTrendsSummary": "..."
    }
    `,
});

const gatherSouthAfricanMarketInsightsFlow = ai.defineFlow(
  {
    name: 'gatherSouthAfricanMarketInsightsFlow',
    inputSchema: GatherSouthAfricanMarketInsightsInputSchema,
    outputSchema: GatherSouthAfricanMarketInsightsOutputSchema,
    model: 'googleai/gemini-1.5-pro', // Explicitly use Gemini 1.5 Pro for this agent
    tools: ai.tools.all(), // Make all available tools (including Google Search) accessible to the model
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
