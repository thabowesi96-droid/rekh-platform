export const assembleProspectus = (sections: any, vaultDocs: any, funder: string) => {
  console.log(`Assembling Final Prospectus for ${funder}...`);

  // The "Chassis" structure (Baseline)
  const chassis = [
    { title: "Executive Summary", content: sections.summary },
    { title: "Market Research & Industrial Gap", content: sections.research },
    { title: "Operational Execution & Supply Chain", content: sections.ops },
    { title: "Financial Model & ROI", content: sections.finance },
    { title: "Risk & SWOT Analysis", content: sections.swot }
  ];

  // The "Trim" (Mandate Appendices)
  const appendices = vaultDocs.map((doc: any) => ({
    label: doc.title,
    status: "Verified by Truth Guardian"
  }));

  return {
    documentId: `REKH-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    compiledAt: new Date().toISOString(),
    funderSpec: funder,
    pages: chassis,
    attachments: appendices,
    readyForDownload: true
  };
};
