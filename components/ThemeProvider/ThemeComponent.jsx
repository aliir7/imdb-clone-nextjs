"use client";

import { ThemeProvider } from "next-themes";

function ThemeComponent({ children }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem="true"
      themes={["dark", "light"]}
    >
      <div className="min-h-screen text-gray-700 transition-colors duration-300 select-none dark:bg-gray-700 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default ThemeComponent;
