document.addEventListener("DOMContentLoaded", () => {
  //   console.log("DOM fully loaded");

  // Theme toggle button event listener
  const themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      const isDarkMode = document.body.classList.contains("dark");
      // Toggle theme
      if (isDarkMode) {
        // document.body.classList.remove("dark");
        localStorage.setItem("pref-theme", "light");
      } else {
        // document.body.classList.add("dark");
        localStorage.setItem("pref-theme", "dark");
      }

      // Update the stroke color for all SVGs when the theme changes
      document.querySelectorAll("svg").forEach((svg) => {
        // console.log("Updating stroke for SVG:", svg);
        updateStroke(svg);
      });
    });
  }

  const loadAndReplaceSVG = (imgElement) => {
    const src = imgElement.getAttribute("data-src");
    if (!src) {
      console.warn("No data-src found for element:", imgElement);
      return;
    }

    console.log("Loading SVG from:", src);

    // Capture width and height from img element before replacing
    const imgWidth = imgElement.getAttribute("width") || imgElement.style.width;
    const imgHeight =
      imgElement.getAttribute("height") || imgElement.style.height;

    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.statusText}`);
        }
        return response.text();
      })
      .then((svgText) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
        const svgElement = svgDoc.querySelector("svg");

        if (svgElement) {
          //   console.log("Replacing element with SVG:", imgElement);
          imgElement.replaceWith(svgElement);

          // Apply dimensions to the SVG
          if (imgWidth) {
            svgElement.setAttribute("width", imgWidth);
            // console.log(`Set SVG width to: ${imgWidth}`);
          }
          if (imgHeight) {
            svgElement.setAttribute("height", imgHeight);
            // console.log(`Set SVG height to: ${imgHeight}`);
          }

          // Update stroke for paths inside the SVG with the dynamic-stroke class
          updateStroke(svgElement);
        } else {
          console.error("No <svg> element found in:", src);
        }
      })
      .catch((error) => console.error("Failed to load SVG:", error));
  };

  const updateStroke = (svgElement) => {
    // console.log("Updating stroke for SVG:", svgElement);

    // Select paths or elements inside the SVG with the dynamic-stroke class
    const elements = svgElement.querySelectorAll(".dynamic-stroke");
    elements.forEach((element) => {
      //   console.log("Updating stroke for element:", element);
      element.setAttribute(
        "stroke",
        document.body.classList.contains("dark") ? "#FFFFFF" : "#000000"
      );
    });
  };

  const lazyLoadSVG = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log("Element is visible:", entry.target);
        const imgElement = entry.target;
        loadAndReplaceSVG(imgElement);
        observer.unobserve(imgElement); // Stop observing after loading
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoadSVG, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Load when 10% of the element is visible
  });

  const initializeObserver = () => {
    const imgElements = document.querySelectorAll("img[data-src]");
    // console.log("Found SVG placeholders:", imgElements);

    imgElements.forEach((img) => {
      //   console.log("Observing image:", img);
      observer.observe(img);
    });
  };

  // Initialize observer for elements already in the DOM
  initializeObserver();
});
