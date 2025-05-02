/** Attaches copy buttons to code blocks in the document,
 * allowing users to copy code easily. */
function attachCopyButtons() {
  // console.log("attachCopyButtons called");

  const copyButtonLabel = "Copy";
  // Select only pre elements that don't already have a copy button inside
  const codeBlocks = Array.from(
    document.querySelectorAll("pre:not(:has(button.copy-code))")
  );

  // console.log(codeBlocks);

  // Define copyCode function here so it's accessible
  async function copyCode(block, button) {
    const code = block.querySelector("code");
    const text = code?.innerText;

    // Use try-catch for clipboard API in case of errors (e.g., permissions)
    try {
      await navigator.clipboard.writeText(text ?? "");
      // visual feedback that task is completed
      button.innerText = "Copied";
      button.disabled = true; // Disable button temporarily

      setTimeout(() => {
        button.innerText = copyButtonLabel;
        button.disabled = false; // Re-enable button
      }, 1250);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      button.innerText = "Error"; // Indicate error
      setTimeout(() => {
        button.innerText = copyButtonLabel;
      }, 1250);
    }
  }

  for (const codeBlock of codeBlocks) {
    // Check again inside loop for safety, though selector should handle it
    if (codeBlock.querySelector("button.copy-code")) {
      continue;
    }

    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    // Add a class to identify the wrapper if needed later
    wrapper.classList.add("code-block-wrapper");

    const copyButton = document.createElement("button");
    copyButton.className = "copy-code"; // Ensure class matches selector
    copyButton.innerHTML = copyButtonLabel;
    codeBlock.setAttribute("tabindex", "0");

    // Append button *before* wrapping to simplify structure
    codeBlock.appendChild(copyButton);

    // Wrap codeblock with relative parent element
    // Ensure parentNode exists before inserting
    if (codeBlock.parentNode) {
      codeBlock.parentNode.insertBefore(wrapper, codeBlock);
      wrapper.appendChild(codeBlock);
    } else {
      console.warn("Code block has no parent node, cannot wrap:", codeBlock);
    }

    copyButton.addEventListener("click", async e => {
      e.stopPropagation(); // Prevent potential event bubbling issues
      await copyCode(codeBlock, copyButton);
    });
  }
}

// --- Initialization Function ---
function initializeCopyButtons() {
  // Only run if pre elements exist on the page
  if (document.querySelector("pre")) {
    attachCopyButtons();
  }
}

// Run initialization after the DOM is fully loaded for the initial page load
// Use 'interactive' or 'complete' readyState check for safety
if (document.readyState === "loading") {
  // console.log("loading, calling after dom content loaded");
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", initializeCopyButtons);
} else {
  // console.log("interactive/complete, dom content loaded already");
  // `DOMContentLoaded` has already fired or state is 'interactive'/'complete'
  initializeCopyButtons();
}

// Run initialization after Astro navigations
document.addEventListener("astro:page-load", initializeCopyButtons);
document.addEventListener("astro:after-swap", initializeCopyButtons);
