chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  // Detect if the user just landed on the IDC Portal
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes("idc.co.za")) {
    
    // Query all tabs to find your live Rekh Dashboard
    const allTabs = await chrome.tabs.query({});
    const rekhTab = allTabs.find(t => t.url && t.url.includes("rekh-platform.vercel.app"));

    if (rekhTab) {
      // Trigger a Blue "LIVE" Badge on the extension icon
      chrome.action.setBadgeText({ text: "LIVE", tabId: tabId });
      chrome.action.setBadgeBackgroundColor({ color: "#0055ff" });
      
      // Send a system notification to the operator
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'src/icons/icon128.png',
        title: 'Rekh Sovereign Bridge Active',
        message: 'IDC Portal detected. Your audited project data is ready for injection.',
        priority: 2
      });
    }
  }
});
