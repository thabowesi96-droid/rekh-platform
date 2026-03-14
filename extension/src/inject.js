const FIELD_MAP = {
  "idc.co.za": {
    "ctl00_ContentPlaceHolder1_txtShareholder": "ownerName",
    "input_total_funding_req": "totalFunding",
    "textarea_employment_impact": "jobNarrative",
    "ddlSectorSelect_v2": "sectorCode"
  },
  "nef.org.za": {
    "company_name": "projectName",
    "bbee_level": "bbbeeLevel"
  }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "FILL_FORM") {
    const host = window.location.hostname;
    const mappings = FIELD_MAP[Object.keys(FIELD_MAP).find(k => host.includes(k))];
    
    if (mappings) {
      Object.entries(mappings).forEach(([htmlId, dataKey]) => {
        const field = document.getElementById(htmlId) || document.querySelector(`[name="${htmlId}"]`);
        if (field && request.payload[dataKey]) {
          field.value = request.payload[dataKey];
          // The Rekh Signature: Visual Confirmation of Sovereign Control
          field.style.border = "3px solid #0055ff";
          field.style.boxShadow = "0 0 10px rgba(0, 85, 255, 0.5)";
          field.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      sendResponse({ status: "Success" });
    }
  }
});
