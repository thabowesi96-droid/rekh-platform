export type FunderTarget = 'IDC' | 'NEF' | 'SEFA' | 'CUSTOM';

export function morphDataToTarget(projectData: any, target: FunderTarget) {
  const registry = {
    IDC: {
      "Project Title": projectData.name || "Sovereign Footwear Factory",
      "Job Creation (Direct)": "8 Full-Time (Verified)",
      "Total Funding Required": "R 14,200,000",
      "Technical Viability": "Tier-2 ISO-certified Equipment Pivot"
    },
    NEF: {
      "Enterprise Name": projectData.name || "Sovereign Footwear Factory",
      "B-BBEE Level": "Level 1 (Black Industrialist)",
      "Economic Impact Statement": "Local manufacturing job creation in high-unemployment sector."
    }
  };

  return registry[target as keyof typeof registry] || {};
}
