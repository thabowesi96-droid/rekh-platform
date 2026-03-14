export const FUNDER_SCHEMA = {
  IDC_PORTAL: {
    fields: ["Company Registration", "Lead Applicant", "SARS Tax Pin", "Project DSCR"],
    mapping: (data: any) => ({
      "Lead Applicant": data.owner.name,
      "Project DSCR": data.metrics.dscr >= 1.2 ? "PASS" : "FAIL",
      "Job Impact": `${data.metrics.jobs} Permanent Positions`
    })
  },
  SEFA_MSME: {
    fields: ["Bank Confirmation", "Asset Quotations", "Monthly Net Income"],
    mapping: (data: any) => ({
      "Asset Assist": `R ${data.finances.capex.toLocaleString()}`,
      "Ownership": "100% Black Owned"
    })
  }
};
