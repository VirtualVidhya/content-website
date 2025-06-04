// // (function () {
//   // Get theme from localStorage or system preference
//   function getStoredOrSystemTheme() {
//     const stored = localStorage.getItem("theme");
//     if (stored === "light" || stored === "dark") {
//       return stored;
//     }
//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   }

//   // Apply theme class + data-theme attribute and update meta tag
//   function applyTheme(theme) {
//     localStorage.setItem("theme", theme);
//     document.documentElement.dataset.theme = theme;
//     document.documentElement.classList.toggle("dark", theme === "dark");
//     updateMetaThemeColor();
//   }

//   // Sync <meta name="theme-color"> to match body background
//   function updateMetaThemeColor() {
//     const bg = window.getComputedStyle(document.body).backgroundColor;
//     const meta = document.querySelector("meta[name='theme-color']");
//     if (meta) meta.setAttribute("content", bg);
//   }

//   // Initialize toggle button behavior
//   function initThemeToggle() {
//     const btn = document.querySelector("#theme-btn");

//     if (!btn) return;

//     // Set initial button label/icon
//     let current = getStoredOrSystemTheme();
//     btn.setAttribute("aria-label", current);

//     // On click, flip theme
//     btn.addEventListener("click", () => {
//       current = (current === "light" ? "dark" : "light");
//       applyTheme(current);
//       btn.setAttribute("aria-label", current);
//     });

//     // Also respond to system-level changes
//     window
//       .matchMedia("(prefers-color-scheme: dark)")
//       .addEventListener("change", e => {
//         current = e.matches ? "dark" : "light";
//         applyTheme(current);
//         btn.setAttribute("aria-label", current);
//       });
//   }

//   // Kick off immediately (no Astro client events needed)
//   initThemeToggle();
//   document.addEventListener("astro:page-load", initThemeToggle());
// // })();

// const primaryColorScheme = ""; // "light" | "dark"

function getPreferedTheme() {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  // if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferedTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  // document.firstElementChild.setAttribute("data-theme", themeValue);
  document.documentElement.setAttribute("data-theme", themeValue);

  document.documentElement.classList.toggle("dark", themeValue === "dark");

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    const bgColor = window.getComputedStyle(body).backgroundColor;

    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  function setThemeFeature() {
    // set on load so screen readers can get the latest value on the button
    reflectPreference();

    // now this script can find and listen for clicks on the control
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      console.log("toggle theme");
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference();
    });
  }

  setThemeFeature();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setThemeFeature);
};

// function setThemeFeature() {
//   // set on load so screen readers can get the latest value on the button
//   reflectPreference();

//   // now this script can find and listen for clicks on the control
//   document.querySelector("#theme-btn")?.addEventListener("click", () => {
//     // console.log("toggle theme");
//     themeValue = themeValue === "light" ? "dark" : "light";
//     setPreference();
//   });
// }

// setThemeFeature();

// Runs on view transitions navigation
// document.addEventListener("astro:after-swap", setThemeFeature);
// document.addEventListener("astro:page-load", setThemeFeature);

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
