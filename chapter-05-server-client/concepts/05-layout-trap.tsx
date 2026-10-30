// ==========================================
// Concept 5.5: The Layout Trap
// ==========================================

// ❌ THE BAD WAY:
// Putting 'use client' at the top of a layout forces ALL child pages 
// to be Client Components, increasing bundle size.
//
// 'use client';
// export default function BadLayout({ children }) { ... }

// ✅ THE GOOD WAY:
// Keep the layout as a Server Component. Extract only the interactive 
// parts (like a Navbar) into a separate Client Component.

// 1. THE SERVER LAYOUT (app/layout.tsx)
// import ClientNavbar from './ClientNavbar';
// export default function GoodLayout({ children }) {
//   return (
//     <div>
//       <ClientNavbar /> {/* Only this part is interactive */}
//       <main>{children}</main> {/* Pages remain Server Components */}
//     </div>
//   );
// }

// 2. THE CLIENT NAVBAR (app/ClientNavbar.tsx)
// 'use client';
// import { useState } from 'react';
// export default function ClientNavbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   return <button onClick={() => setIsOpen(!isOpen)}>Menu</button>;
// }