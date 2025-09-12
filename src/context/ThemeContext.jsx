"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Initialize from localStorage or system preference
  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  // Apply/remove class on <html> and <body> for Tailwind dark variant
  useEffect(() => {
    if (typeof document === "undefined") return;
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    if (theme === "dark") {
      htmlEl.classList.add("dark");
      bodyEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
      bodyEl.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      console.log(`Theme toggled from ${prev} to ${next}`);
      try {
        window.localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}


