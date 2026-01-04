'use client';

import { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  { id: 'ocean', name: 'Ocean', color: '#0ea5e9' },
  { id: 'purple', name: 'Purple', color: '#a855f7' },
  { id: 'neutral', name: 'Neutral', color: '#737373' },
  { id: 'catppuccin', name: 'Catppuccin', color: '#f5c2e7' },
  { id: 'vitepress', name: 'VitePress', color: '#42b883' },
] as const;

type ThemeId = (typeof themes)[number]['id'];

export function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>('ocean');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('color-theme') as ThemeId | null;
    if (saved && themes.some((t) => t.id === saved)) {
      setCurrentTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (themeId: ThemeId) => {
    // Remove all theme classes first
    themes.forEach((t) => {
      document.documentElement.classList.remove(`theme-${t.id}`);
    });
    // Add new theme class
    document.documentElement.classList.add(`theme-${themeId}`);
  };

  const selectTheme = (themeId: ThemeId) => {
    setCurrentTheme(themeId);
    localStorage.setItem('color-theme', themeId);
    applyTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-md p-1.5 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        aria-label="Select color theme"
      >
        <Palette className="size-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
          />
          <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg border border-fd-border bg-fd-popover p-2 shadow-lg">
            <div className="text-xs font-medium text-fd-muted-foreground mb-2 px-2">
              Color Theme
            </div>
            {themes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                onClick={() => selectTheme(theme.id)}
                className={`flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-fd-accent ${
                  currentTheme === theme.id
                    ? 'bg-fd-accent text-fd-accent-foreground'
                    : ''
                }`}
              >
                <span
                  className="size-3 rounded-full border border-fd-border"
                  style={{ backgroundColor: theme.color }}
                />
                {theme.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
