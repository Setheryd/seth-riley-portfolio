// src/app/layout.js
import './globals.css';
import VisualEffectsInitializer from './components/VisualEffectsInitializer';

export const metadata = {
  title: "Seth Riley | Data Engineer & AI Solutions Architect",
  description: "The portfolio of Seth Riley, a technical leader specializing in data engineering, AI solutions, and full-stack development on Azure and OCI.",
};

export default function RootLayout({ children }) {
  return (
    // Add suppressHydrationWarning here
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning> 
        {children}
        <VisualEffectsInitializer />
      </body>
    </html>
  );
}