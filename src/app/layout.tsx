import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IONCODERS | Code. Connect. Create.",
  description: "A community of technology enthusiasts based in Kenya. We learn, build, and grow together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Ultra-light inline script to prevent hydration flash for dark mode
  const themeScript = `
    (function() {
      try {
        var localTheme = window.localStorage.getItem('theme');
        var sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = localTheme ? localTheme : (sysTheme ? 'dark' : 'light');
        if (theme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        }
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Flash prevention: apply saved theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col antialiased selection:bg-blue-600 selection:text-white">
        <div className="global-bg-anim" aria-hidden="true" />
        <div className="global-crosses" aria-hidden="true" />
        
        {children}
      </body>
    </html>
  );
}
