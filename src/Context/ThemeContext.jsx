import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [currTheme, setCurrTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference as fallback
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const html = document.documentElement;
    // Add transition class
    html.classList.add("theme-transition");

    // Apply theme by adding/removing class
    if (currTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    
    // Store preference
    localStorage.setItem("theme", currTheme);

    // Remove transition class after the transition duration
    setTimeout(() => {
      html.classList.remove("theme-transition");
    }, 1500); // Match this with the transition time in CSS

  }, [currTheme]);

  const ToggleTheme = () => {
       setTimeout(() => {
        setCurrTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
       }, 500);
  };

  return (
    <ThemeContext.Provider value={{ currTheme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
