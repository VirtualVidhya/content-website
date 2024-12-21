document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle button event listener
  const themeToggleButton = document.getElementById("theme-toggle");
  const isDarkMode = () => document.body.classList.contains("dark");

  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      // Update the stroke color for all SVGs when the theme changes
      document.querySelectorAll("svg").forEach(updateStroke);
    });
  }

  const loadAndReplaceSVG = async (imgElement) => {
    const src = imgElement.getAttribute("data-src");
    if (!src) return;

    const imgWidth = imgElement.getAttribute("width") || imgElement.style.width;
    const imgHeight =
      imgElement.getAttribute("height") || imgElement.style.height;

    try {
      const response = await fetch(src);
      if (!response.ok)
        throw new Error(`Failed to fetch SVG: ${response.statusText}`);
      const svgText = await response.text();
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
      const svgElement = svgDoc.querySelector("svg");

      if (svgElement) {
        imgElement.replaceWith(svgElement);
        if (imgWidth) svgElement.setAttribute("width", imgWidth);
        if (imgHeight) svgElement.setAttribute("height", imgHeight);
        updateStroke(svgElement);
      } else {
        console.error("No <svg> element found in:", src);
      }
    } catch (error) {
      console.error("Failed to load SVG:", error);
    }
  };

  const updateStroke = (svgElement) => {
    const elements = svgElement.querySelectorAll(".dynamic-stroke");
    const strokeColor = isDarkMode() ? "#FFFFFF" : "#000000";
    elements.forEach((element) => element.setAttribute("stroke", strokeColor));
  };

  const lazyLoadSVG = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const imgElement = entry.target;
        loadAndReplaceSVG(imgElement).then(() =>
          observer.unobserve(imgElement)
        );
      }
    });
  };

  const initializeObserver = () => {
    const imgElements = document.querySelectorAll("img[data-src]");
    const observer = new IntersectionObserver(lazyLoadSVG, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    imgElements.forEach((img) => observer.observe(img));
  };

  // Delay observer initialization slightly to avoid affecting critical render
  requestIdleCallback
    ? requestIdleCallback(initializeObserver)
    : setTimeout(initializeObserver, 50);
});
