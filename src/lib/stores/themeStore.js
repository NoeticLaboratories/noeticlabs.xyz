import { writable } from "svelte/store";
import { browser } from "$app/environment";

const STORAGE_KEY = "preferred-theme";

function getInitialTheme() {
  if (!browser) {
    return "b10"; // Default for SSR
  }

  // Read what's already been set on the HTML element
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme) {
    return currentTheme; // Trust the theme already applied
  }

  // Fallback to original logic
  const storedTheme = localStorage.getItem(STORAGE_KEY);
  if (
    storedTheme &&
    ["white", "b10", "b80", "b90", "b100"].includes(storedTheme)
  ) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "b100"
    : "white";
}

export const theme = writable(getInitialTheme());

if (browser) {
  theme.subscribe((value) => {
    localStorage.setItem(STORAGE_KEY, value);
    document.documentElement.setAttribute("data-theme", value);
  });
}
