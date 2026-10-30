// ==========================================
// Concept 4.4: The Metadata API
// Location: app/dashboard/page.tsx
// ==========================================

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Home | My App',
  description: 'View your dashboard statistics and manage your account.',
};

export default function DashboardHome() {
  return (
    <div>
      <h1 className='text-xl font-bold'>Dashboard Home Page</h1>
      <p>Welcome to the Chapter 4 Dashboard.</p>
    </div>
  );
}