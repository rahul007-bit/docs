import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
});

// Script to apply color theme before hydration to prevent flash
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('color-theme');
      if (theme && ['ocean', 'purple', 'neutral', 'catppuccin', 'vitepress'].includes(theme)) {
        document.documentElement.classList.add('theme-' + theme);
      }
    } catch (e) {}
  })();
`;

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
