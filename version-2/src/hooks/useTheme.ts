import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // localStorage unavailable (e.g. private mode) — fall through to system preference
  }
  return null;
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme());

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('theme-transition');
    root.classList.toggle('light', theme === 'light');
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore storage failures
    }
    const timeout = window.setTimeout(() => root.classList.remove('theme-transition'), 350);
    return () => window.clearTimeout(timeout);
  }, [theme]);

  // Follow system preference changes only until the user makes an explicit choice
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (getStoredTheme() === null) {
        setTheme(e.matches ? 'light' : 'dark');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}