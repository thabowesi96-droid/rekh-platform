const FIELD_MAP = {
  "idc.co.za": {
    "txtProjectName": "projectName",
    "numJobsCreated": "jobsCount",
    "txtCapexTotal": "totalFunding"
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
          field.style.border = "2px solid #0055ff";
          field.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      sendResponse({ status: "Success" });
    }
  }
});
