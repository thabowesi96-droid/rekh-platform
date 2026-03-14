export const PLACEHOLDER_MAP = {
  vatNumber: "REQUIRED: 10-Digit VAT PIN",
  dscrRatio: "CALC_PENDING: Finance Model Required",
  jobsCount: "INPUT_NEEDED: Target Employment Number",
  industrialSector: "AUTO_DETECTING..."
};

export function resolveData(key: string, value: any) {
  if (value === null || value === undefined || value === "") {
    return PLACEHOLDER_MAP[key as keyof typeof PLACEHOLDER_MAP] || "[MISSING_DATA]";
  }
  return value;
}
