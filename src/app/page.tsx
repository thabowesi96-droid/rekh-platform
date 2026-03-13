import { redirect } from 'next/navigation';

export default function RootPage() {
  // Sovereign Redirect: Send users straight to their Command Center
  redirect('/dashboard');
}
