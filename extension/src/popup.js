document.getElementById('fillBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  // In a real scenario, this fetches from your Vercel URL
  const mockData = {
    projectName: "Sovereign Footwear Alpha",
    jobsCount: "8",
    totalFunding: "14200000",
    bbbeeLevel: "Level 1"
  };

  chrome.tabs.sendMessage(tab.id, { action: "FILL_FORM", payload: mockData });
  document.getElementById('status').innerText = "DATA INJECTED";
});
