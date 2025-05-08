import { writable } from "svelte/store";
import { browser } from "$app/environment";

// Key for localStorage
const STORAGE_KEY = "preferred-theme";

// Function to get the initial theme
function getInitialTheme() {
  if (!browser) {
    return "white"; // Default for SSR or non-browser env
  }

  // 1. Check localStorage
  const storedTheme = localStorage.getItem(STORAGE_KEY);
  if (
    storedTheme &&
    (storedTheme === "white" ||
      storedTheme === "b10" ||
      storedTheme === "b80" ||
      storedTheme === "b90" ||
      storedTheme === "b100")
  ) {
    return storedTheme;
  }

  // 2. Check system preference
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "b100";
  }

  // 3. Default to light
  return "white";
}

// Create the writable store
export const theme = writable(getInitialTheme());

// Subscribe to changes and update localStorage + html attribute
if (browser) {
  theme.subscribe((value) => {
    // Update localStorage
    localStorage.setItem(STORAGE_KEY, value);

    // Update data-theme attribute on <html> element
    document.documentElement.setAttribute("data-theme", value);
  });
}

// Function to apply the theme immediately on load (run this early)
export function applyInitialTheme() {
  if (browser) {
    const initial = getInitialTheme();
    document.documentElement.setAttribute("data-theme", initial);
    // Set store value without triggering subscription initially if needed,
    // but writable already handles setting the value.
  }
}
