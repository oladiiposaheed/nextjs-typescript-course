// ==========================================
// Concept 1.1: Basic Types in Next.js
// ==========================================

const siteName: string = 'Dashly';
const version: number = 1;
const isLive: boolean = false;
const pages: string[] = ['home', 'about', 'contact'];
const config: { theme: string; darkMode: boolean } = {
    theme: 'light',
    darkMode: false
};

function greet(user: string): string {
    return `Hello, ${user}! Welcome to ${siteName}.`;
}

// ---- LOG EVERYTHING ----
console.log(siteName);
console.log(version);
console.log(isLive);
console.log(pages);
console.log(config);
console.log(greet('Fatimah'));