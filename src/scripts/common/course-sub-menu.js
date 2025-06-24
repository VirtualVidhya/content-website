function initializeCourseSubMenu() {
  const supportsHover = window.matchMedia("(hover: hover)").matches;
  const list = document.querySelector(".sub-menu");
  const submenu_btn = document.querySelector(".submenu-trigger");
  // const mobile_social_links = document.querySelector(".mobile-social-links");

  if (!list || !submenu_btn) {
    return;
  }

  function SubMenu(target) {
    const isOpen = submenu_btn.getAttribute("data-cousemenu-state") === "open";

    if (isOpen) {
      submenu_btn.setAttribute("data-cousemenu-state", "close");
      submenu_btn.classList.remove("text-font-color-sec");
      submenu_btn.classList.remove("underline");
      list.classList.add("hidden");
      list.classList.remove("flex");
    } else {
      submenu_btn.setAttribute("data-cousemenu-state", "open");
      submenu_btn.classList.add("text-font-color-sec");
      submenu_btn.classList.add("underline");
      list.classList.remove("hidden");
      list.classList.add("flex");
    }
  }

  // --- Event Handling ---
  // Remove existing listener to prevent duplicates on HMR or subsequent page loads
  const clickHandler = e => {
    e.preventDefault();
    // Ensure we're targeting the icon if it exists, otherwise the button itself
    const icon = e.currentTarget.querySelector("ion-icon");
    SubMenu(icon || e.currentTarget);
  };

  // Clean up previous listener if any (important for HMR and multiple navigations)
  if (submenu_btn._clickHandler) {
    submenu_btn.removeEventListener("click", submenu_btn._clickHandler);
  }

  if (!supportsHover) {
    submenu_btn.addEventListener("click", clickHandler);
    submenu_btn._clickHandler = clickHandler; // Store reference for removal

    submenu_btn.classList.remove("hover:text-font-color-sec");
    submenu_btn.classList.remove("hover:underline");
    list.classList.remove("sm:group-hover:flex"); // Ensure hover effect is off
  } else {
    // For hover-supported devices, rely on CSS. Remove JS click listener if it was added.
    if (submenu_btn._clickHandler) {
      submenu_btn.removeEventListener("click", submenu_btn._clickHandler);
      delete submenu_btn._clickHandler; // Clean up stored reference
    }

    list.classList.add("sm:group-hover:flex");
    submenu_btn.classList.add("hover:text-font-color-sec");
    submenu_btn.classList.add("hover:underline");
  }

  if (!submenu_btn.hasAttribute("data-topbarmenu-state")) {
    // Assuming menu starts closed
    submenu_btn.setAttribute("data-cousemenu-state", "close");
  }
}

// Run on initial page load
initializeCourseSubMenu();

// Run on subsequent page loads (client-side navigation)
// document.addEventListener("astro:page-load", initializeCourseSubMenu);
document.addEventListener("astro:after-swap", initializeCourseSubMenu);
