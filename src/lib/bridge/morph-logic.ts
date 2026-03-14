export function getMorphedData(projectData: any, target: string) {
  const baseData = {
    projectName: "Sovereign Footwear Alpha",
    jobs: 8,
    dscr: 1.55,
    capex: 14200000,
    bbbee: "Level 1",
    vat: "4190283746"
  };

  const maps: any = {
    IDC: {
      "Applicant Name": baseData.projectName,
      "Direct Job Creation": `${baseData.jobs} Permanent`,
      "Project Debt Service Ratio": baseData.dscr.toString(),
      "Funding Requested": `R ${baseData.capex.toLocaleString()}`
    },
    NEF: {
      "Target Enterprise": baseData.projectName,
      "Black Industrialist Status": "Verified Level 1",
      "Sector Alignment": "Industrial Manufacturing / Footwear"
    }
  };

  return maps[target] || {};
}
