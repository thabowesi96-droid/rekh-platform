export const FUNDER_SCHEMA = {
  IDC_PORTAL: { /* ... existing ... */ },
  BIC_COMMITTEE: {
    fields: ["Localization %", "Energy Efficiency Index", "Off-take Certainty", "SLA Reliability"],
    mapping: (data: any) => ({
      "Localization %": "68% (Local Equipment + Labor)",
      "Energy Efficiency Index": "Tier-2 Hybrid Solar Integrated",
      "Off-take Certainty": "3 Retailer LOIs attached to Vault",
      "SLA Reliability": "36-Month On-Site Service Level Guarantee"
    })
  }
};
