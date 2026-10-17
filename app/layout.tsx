// import type { Metadata } from "next";
// import Link from "next/link";
// import './globals.css';

// export const metadata: Metadata = {
//   title: 'My Site',
//   description: 'Mini project for Chapter 0',
// };

// export default function RootLayout({ children }: LayoutProps<'/'>) {
//   return (
//     <html lang="en">
//       <body>
//         <nav className="p-4 border-b flex gap-4">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/contact">Contact</Link>
//         </nav>

//         {children}

//         <footer className="p-4 text-center text-gray-400 text-sm">
//           © 2026 My Site
//         </footer>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: 'ScholarHub',
  description: 'School management dashboard',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}