// ==========================================
// Concept 4.1: The Root Layout
// Location: app/layout.tsx
// ==========================================

import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Course',
  description: 'Learning Next.js from Zero to Hero',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}