export const generateResponseLetter = (funder: string, changes: any) => {
  return `
[YOUR COMPANY NAME]
[DATE]

RE: Response to Queries regarding Prospectus [ID]

Dear Investment Committee,

Thank you for your constructive feedback regarding our recent submission. We have performed a comprehensive sensitivity analysis on the proposed conditions.

Key Strategic Adjustments:
1. EQUITY COMPLIANCE: We have increased our skin-in-the-game to ${changes.equity}%. To achieve this without compromising liquidity, we have value-engineered our Capex through [Optimized Brand Selection].
2. EMPLOYMENT MANDATE: We have accepted the requirement for ${changes.jobs} permanent roles. This has been absorbed into the model through [Phased Recruitment] to protect the Year 1 Debt Service Coverage Ratio (DSCR).

The revised model maintains a DSCR of ${changes.dscr}x, ensuring capital preservation while meeting all funder nuances.

Please find the updated Negotiated Prospectus attached.

Sincerely,
[YOUR NAME]
  `;
};
