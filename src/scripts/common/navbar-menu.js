function initializeNavbarMenu() {
    const btn = document.getElementById("topbar-menu-btn");
    const list = document.querySelector(".topbar-menu");
  
    if (!btn || !list) {
      // console.log("Navbar elements not found, skipping init."); // Optional debug log
      return;
    }
  
    const closeBtnIcon = btn.querySelector("svg[data-state='close']");
    const openBtnIcon = btn.querySelector("svg[data-state='open']");
    const body = document.body;
  
    if (!closeBtnIcon || !openBtnIcon) {
      // console.log("Navbar icons not found, skipping init."); // Optional debug log
      return;
    }
  
    // Define the toggle function locally
    function toggleMenu() {
      // Use a data attribute or class to track state instead of element.name
      const isOpen = btn.getAttribute("data-topbarmenu-state") === "open";
      // const isOpen = (btn.name === "open");
  
      if (!isOpen) {
        // Open the menu
        btn.setAttribute("data-topbarmenu-state", "open");
        if(closeBtnIcon) closeBtnIcon.style.display = "block";
        if(openBtnIcon) openBtnIcon.style.display = "none";
        list.classList.add("translate-x-[640px]", "opacity-100"); // Corrected translate value? Assuming 0px is open
        // list.classList.remove("translate-x-[640px]"); // Remove the closed state translate
        body.style.overflow = "hidden";
      } else {
        // Close the menu
        btn.setAttribute("data-topbarmenu-state", "close");
        if(closeBtnIcon) closeBtnIcon.style.display = "none";
        if(openBtnIcon) openBtnIcon.style.display = "block";
        list.classList.remove("translate-x-[640px]", "opacity-100");
        // list.classList.add("translate-x-[640px]"); // Add the closed state translate
        body.style.overflow = "";
      }
    }
  
    // --- Event Handling ---
    const clickHandler = (e) => {
      e.preventDefault();
      toggleMenu();
    };
  
    // Clean up previous listener if any
    if (btn._navClickHandler) {
      btn.removeEventListener("click", btn._navClickHandler);
    }
  
    // Add the new listener and store its reference
    btn.addEventListener("click", clickHandler);
    btn._navClickHandler = clickHandler;
  
    // Initialize button state attribute if not present (e.g., on first load)
    if (!btn.hasAttribute("data-topbarmenu-state")) {
       // Assuming menu starts closed
       btn.setAttribute("data-topbarmenu-state", "close");
       if(closeBtnIcon) closeBtnIcon.style.display = "none";
       if(openBtnIcon) openBtnIcon.style.display = "block";
       list.classList.remove("opacity-100"); // Ensure opacity is initially off if closed
       list.classList.add("translate-x-[640px]"); // Ensure it's translated off-screen
    }
  }
  
  // Run on initial page load
  initializeNavbarMenu();
  
  // Run on subsequent page loads (client-side navigation)
  document.addEventListener("astro:page-load", initializeNavbarMenu);
  