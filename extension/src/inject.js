const LOGIN_MAP = {
  "idc.co.za": { u: "txtUsername", p: "txtPassword", b: "btnLogin" },
  "nef.org.za": { u: "email", p: "password", b: "submit-button" }
};

const FIELD_MAP = {
  "idc.co.za": {
    "ctl00_ContentPlaceHolder1_txtShareholder": "ownerName",
    "input_total_funding_req": "totalFunding",
    "textarea_employment_impact": "jobNarrative"
  },
  "nef.org.za": {
    "company_name": "projectName",
    "bbee_level": "bbbeeLevel"
  }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const host = window.location.hostname;
  
  if (request.action === "AUTO_LOGIN") {
    const config = LOGIN_MAP[Object.keys(LOGIN_MAP).find(k => host.includes(k))];
    if (config) {
      const uField = document.getElementById(config.u) || document.querySelector(`[name="${config.u}"]`);
      const pField = document.getElementById(config.p) || document.querySelector(`[name="${config.p}"]`);
      if (uField && pField) {
        uField.value = request.creds.username;
        pField.value = request.creds.password;
        uField.style.boxShadow = "0 0 10px #0055ff";
        pField.style.boxShadow = "0 0 10px #0055ff";
        sendResponse({ status: "Credentials Injected" });
      }
    }
  }

  if (request.action === "FILL_FORM") {
    const mappings = FIELD_MAP[Object.keys(FIELD_MAP).find(k => host.includes(k))];
    if (mappings) {
      Object.entries(mappings).forEach(([htmlId, dataKey]) => {
        const field = document.getElementById(htmlId) || document.querySelector(`[name="${htmlId}"]`);
        if (field && request.payload[dataKey]) {
          field.value = request.payload[dataKey];
          field.style.border = "3px solid #0055ff";
          field.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      sendResponse({ status: "Form Injected" });
    }
  }
});
