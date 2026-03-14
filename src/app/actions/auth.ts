'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('rekh_session');
  redirect('/login');
}

export async function getProjectMetrics() {
  return {
    projectName: "Sovereign Footwear Alpha",
    jobs: 8,
    dscr: 1.55,
    capex: 14200000,
    lastAudit: new Date().toISOString()
  };
}
