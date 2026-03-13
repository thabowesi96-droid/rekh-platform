export const triggerSecurityAlert = (projectId: string, type: 'SUCCESS' | 'WARNING' | 'LOCKDOWN') => {
  const timestamp = new Date().toLocaleTimeString();
  
  const alertMap = {
    SUCCESS: `[${timestamp}] ACCESS_GRANTED: Project ${projectId} unlocked by funder.`,
    WARNING: `[${timestamp}] AUTH_STRUGGLE: Multiple failed PIN attempts on Project ${projectId}. Action suggested.`,
    LOCKDOWN: `[${timestamp}] SECURITY_BREACH: Project ${projectId} locked after 5 failed attempts. Link revoked.`
  };

  // In production, this would trigger a Firebase Cloud Function to send a Push Notification/Email
  console.log(`REKH_SECURITY_SIGNAL: ${alertMap[type]}`);
  
  return alertMap[type];
};
