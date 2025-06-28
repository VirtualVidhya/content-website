function setupGlobalScrollHandler() {
  const scrollUpBtn = document.getElementById("scroll-up-btn");
  const postArticle = document.getElementById("article"); // Element specific to PostDetails
  let progressBar = null; // Initialize progress bar variable

  // Function to create the progress bar (only if needed)
  function createProgressBar() {
    if (document.getElementById("scroll-progress-container")) return; // Already created

    const container = document.createElement("div");
    container.id = "scroll-progress-container";
    container.className = "scroll-progress-container"; // Use existing classes

    const bar = document.createElement("div");
    // bar.id = "myBar"; // Use existing ID
    bar.className = "scroll-progress-bar"; // Use existing classes

    container.appendChild(bar);
    document.body.appendChild(container);
    progressBar = bar; // Store reference
  }

  // Single scroll event listener
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Scroll-to-top button logic
    if (scrollUpBtn) {
      if (scrollY > 100) {
        scrollUpBtn.style.display = "flex";
      } else {
        scrollUpBtn.style.display = "none";
      }
    }

    // Progress bar logic (only if on PostDetails page)
    if (postArticle) {
      // Create progress bar elements if they don't exist yet
      if (
        !progressBar &&
        !document.getElementById("scroll-progress-container")
      ) {
        createProgressBar();
      }

      // Update progress bar width
      if (progressBar) {
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = height > 0 ? (scrollY / height) * 100 : 0;
        progressBar.style.width = scrolled + "%";
      }
    }
  });

  // Scroll-to-top click listener
  if (scrollUpBtn) {
    scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // document.documentElement.scrollTo({ // window.scrollTo is generally preferred
      //   top: 0,
      //   behavior: "smooth",
      // });
      // document.body.scrollTo({ // Not needed if using window/documentElement
      //   top: 0,
      //   behavior: "smooth",
      // });
    });
  }
}

// Run the setup function
// Use DOMContentLoaded to ensure elements are available, though script is likely deferred in footer
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupGlobalScrollHandler);
} else {
  setupGlobalScrollHandler();
}

// Re-run setup after Astro view transitions
document.addEventListener("astro:after-swap", setupGlobalScrollHandler);
