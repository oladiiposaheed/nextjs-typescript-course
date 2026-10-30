// ==========================================
// Concept 5.2: The Rules of Server vs Client
// ==========================================

// 🟢 SERVER COMPONENTS (Default)
// ----------------------------
// 1. Fetch data (async/await)
// 2. Access backend resources directly (database)
// 3. Keep sensitive information on server (API keys)
// 4. Render static UI (text, images, layout)
// 🚫 CANNOT use: useState, useEffect, onClick, localStorage

// 🔵 CLIENT COMPONENTS ('use client')
// ----------------------------
// 1. Add interactivity (onClick, onChange)
// 2. Use React hooks (useState, useEffect)
// 3. Access browser APIs (window, localStorage, geolocation)
// 🚫 CANNOT use: Direct database access (use fetch to an API instead)