# **App Name**: Rekh AI Platform

## Core Features:

- Gemini Orchestration Engine: Central orchestration tool using Gemini 1.5 Pro to coordinate the Researcher, Financial, Architect, Regulatory Specialist, and Funder's Advocate agents.
- Researcher Agent: An AI tool leveraging Google Search Grounding to find current South African market data and industry trends.
- Financial Agent: An AI tool calculating 5-year financial projections, including South African VAT (15%) and corporate tax.
- Architect Agent: An AI tool compiling insights and data from other agents into a formal, comprehensive business plan.
- Regulatory Specialist Agent: An AI tool that prioritizes South African government sources (.gov.za), the JSE, and official Gazettes for all labor, OHS, and legal data. It acts as a mandatory auditor tool for the Researcher and Financial agents to ensure POPIA compliance and mathematical accuracy.
- Funder's Advocate Agent: An AI tool acting as a senior credit officer, intercepting the final draft from the Architect Agent to find gaps in market data, mathematical errors, and legal risks. It generates a 'Funder's Risk Report' highlighting potential red flags before publication.
- Secure User Authentication: User login and session management powered by Firebase Auth.
- Executive Dashboard UI: A clean, executive-style dashboard for interacting with agents, monitoring progress, and reviewing outputs.
- Persistent Data Storage: Firestore database for storing user data, agent configurations, and generated business plans in the africa-south1 region.

## Style Guidelines:

- The overall scheme is dark, embodying professionalism and executive gravitas. Primary accents a rich, deep blue (#335799) symbolizing trust and depth. The background is a desaturated, cool dark gray (#21252C) for a sleek, immersive experience. An accent of sophisticated violet (#6B47DD) is used to highlight key interactive elements and provide visual interest.
- Headlines feature 'Space Grotesk' (sans-serif), lending a modern, tech-forward, and authoritative feel. Body text uses 'Inter' (sans-serif) for its high legibility, clean lines, and professional neutrality, ideal for detailed reports and data displays.
- Icons will be modern and minimalistic, using a consistent line-art style with subtle fills, ensuring clarity and professionalism suitable for an executive dashboard. They should intuitively represent agent actions and data insights.
- An 'executive-style' dashboard layout prioritizing data hierarchy and readability. Information will be presented in organized cards or modules, allowing users to quickly grasp insights and agent statuses without feeling overwhelmed.
- Subtle, smooth transitions for data updates, agent activity indicators, and navigation elements. Animations should be efficient, providing clear feedback without distracting from the executive content.