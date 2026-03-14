import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, stage } = await req.json();

  // The System Prompt changes based on the Stage to focus the Agent's "mind"
  const systemPrompts = [
    "You are the Lead Researcher. Focus on Discovery and Sector context.",
    "You are the Technical Architect. Focus on infrastructure, utilities, and logistics.",
    "You are the Quant. Focus on financials, CAPEX, and revenue modeling.",
    "You are the Compliance Officer. Focus on SA regulations and environmental permits.",
    "You are the Executive Strategist. Finalize the investor-ready manifest."
  ];

  const result = await streamText({
    model: google('gemini-2.0-flash-001'),
    system: systemPrompts[stage - 1] || systemPrompts[0],
    messages,
  });

  return result.toDataStreamResponse();
}
