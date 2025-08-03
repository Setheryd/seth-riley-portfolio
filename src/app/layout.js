// src/app/layout.js
import './globals.css';

// The font is now imported directly in globals.css, so font loaders are not needed here.

export const metadata = {
  title: "Seth Riley | Data Engineer & AI Solutions Architect",
  description: "The portfolio of Seth Riley, a technical leader specializing in data engineering, AI solutions, and full-stack development on Azure and OCI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}