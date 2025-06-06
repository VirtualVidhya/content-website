// const primaryColorScheme = ""; // "light" | "dark"

console.log("on script load")

function getPreferedTheme() {
  // Get theme data from local storage
  const currentTheme = localStorage.getItem("theme");
  // return theme value in local storage if it is set
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

  if (themeValue === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    // Get the computed styles for the body element
    const computedStyles = window.getComputedStyle(body);

    // Get the background color property
    const bgColor = computedStyles.backgroundColor;

    // Set the background color in <meta theme-color ... />
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

// set early so no page flashes / CSS is made aware
// reflectPreference();

window.onload = () => {
  console.log("on window load")
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

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
