"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  const applyTheme = (targetTheme: Theme) => {
    if (targetTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("bulus-theme") as Theme | null;
    if (savedTheme === "dark") {
      setThemeState("dark");
      applyTheme("dark");
    } else if (savedTheme === "light") {
      setThemeState("light");
      applyTheme("light");
    } else {
      // Default to light theme for Buluş branding unless user explicitly opts into dark
      setThemeState("light");
      applyTheme("light");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("bulus-theme", newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
