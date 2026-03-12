'use server';
/**
 * @fileOverview A Funder's Advocate AI agent that critically reviews a business plan.
 *
 * - generateRekhFundersRiskReport - A function that generates a Funder's Risk Report for a given business plan.
 * - BusinessPlanInput - The input type for the generateRekhFundersRiskReport function.
 * - FunderRiskReportOutput - The return type for the generateRekhFundersRiskReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BusinessPlanInputSchema = z.object({
  businessPlanContent: z
    .string()
    .describe('The comprehensive business plan content to be reviewed.'),
});
export type BusinessPlanInput = z.infer<typeof BusinessPlanInputSchema>;

const FunderRiskReportOutputSchema = z.object({
  reportContent: z
    .string()
    .describe(
      "A detailed 'Funder's Risk Report' highlighting potential red flags related to financial inaccuracies, market data gaps, and legal risks."
    ),
});
export type FunderRiskReportOutput = z.infer<
  typeof FunderRiskReportOutputSchema
>;

export async function generateRekhFundersRiskReport(
  input: BusinessPlanInput
): Promise<FunderRiskReportOutput> {
  return fundersRiskReportFlow(input);
}

const rekhFundersRiskReportPrompt = ai.definePrompt({
  name: 'rekhFundersRiskReportPrompt',
  input: {schema: BusinessPlanInputSchema},
  output: {schema: FunderRiskReportOutputSchema},
  prompt: `You are a Funder's Advocate Agent, acting as a senior credit officer for Rekh.
Your task is to critically review the provided business plan for potential financial inaccuracies, market data gaps, and legal risks.

Generate a comprehensive 'Funder's Risk Report' that highlights all identified red flags and potential areas of concern that a funder or investor would be interested in before publication.
Structure your report clearly, addressing each area (financial, market data, legal) separately. Provide specific examples or points of concern where possible.

Business Plan for Review:
---
{{{businessPlanContent}}}
---

Begin your 'Funder's Risk Report' now, focusing on critical assessment and potential red flags.`,
});

const fundersRiskReportFlow = ai.defineFlow(
  {
    name: 'fundersRiskReportFlow',
    inputSchema: BusinessPlanInputSchema,
    outputSchema: FunderRiskReportOutputSchema,
  },
  async input => {
    const {output} = await rekhFundersRiskReportPrompt(input);
    return output!;
  }
);
