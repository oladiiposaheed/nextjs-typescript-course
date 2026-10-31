// ==========================================
// Concept 10.2: Next.js Fonts
// Location: app/layout.tsx
// ==========================================

import { Roboto } from 'next/font/google';

// 1. Configure the font
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

// 2. Apply it to the body tag so it works everywhere
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}