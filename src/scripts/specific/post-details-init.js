console.log("post-details-init.js script executing.");

/** Attaches links to headings in the document,
 *  allowing sharing of sections easily */
function addHeadingLinks() {
  const headings = Array.from(
    document.querySelectorAll("h2, h3, h4, h5, h6")
  );
  // Check if any headings were found before proceeding
  if (headings.length === 0) {
    console.log("addHeadingLinks: No headings found.");
    return;
  }
  console.log(`addHeadingLinks: Found ${headings.length} headings.`);

  for (const heading of headings) {
     // Check if link already exists
    if (heading.querySelector("a.heading-link")) {
      // console.log(`addHeadingLinks: Skipping heading '${heading.id}' - link already exists.`);
      continue; // Skip if already processed
    }
    heading.classList.add("group");
    const link = document.createElement("a");
    link.className =
      "heading-link ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100";
    link.href = "#" + heading.id;

    const span = document.createElement("span");
    span.ariaHidden = "true";
    span.innerText = "#";
    link.appendChild(span);
    heading.appendChild(link);
    // console.log(`addHeadingLinks: Added link to heading '${heading.id}'.`);
  }
  console.log("addHeadingLinks function finished.");
}

/** Attaches copy buttons to code blocks in the document,
 * allowing users to copy code easily. */
// function attachCopyButtons() {
//   const copyButtonLabel = "Copy";
//   const codeBlocks = Array.from(document.querySelectorAll("pre"));

//   // Check if any code blocks were found before proceeding
//   if (codeBlocks.length === 0) {
//     console.log("attachCopyButtons: No code blocks (pre elements) found.");
//     return;
//   }
//   console.log(`attachCopyButtons: Found ${codeBlocks.length} code blocks.`);

//   for (const codeBlock of codeBlocks) {
//     // Check if button already exists within this specific code block's wrapper or the block itself
//     const existingButton = codeBlock.parentNode?.style.position === 'relative'
//                            ? codeBlock.parentNode.querySelector("button.copy-code") // Check wrapper first
//                            : codeBlock.querySelector("button.copy-code"); // Check block itself if not wrapped yet

//     if (existingButton) {
//         // console.log("attachCopyButtons: Skipping code block - button already exists.");
//         continue; // Skip if already processed
//     }

//     // Ensure the code block has a parent before attempting to wrap
//     if (!codeBlock.parentNode) {
//         console.warn("attachCopyButtons: Code block has no parent node, cannot wrap or add button.");
//         continue;
//     }

//     // Check if the parent is already the wrapper we created
//     let wrapper = codeBlock.parentNode;
//     if (wrapper.style.position !== 'relative') {
//         // If not wrapped, create and insert wrapper
//         wrapper = document.createElement("div");
//         wrapper.style.position = "relative";
//         codeBlock.parentNode.insertBefore(wrapper, codeBlock);
//         wrapper.appendChild(codeBlock); // Move pre inside wrapper
//     }
//     // else { console.log("attachCopyButtons: Code block already wrapped."); }


//     const copyButton = document.createElement("button");
//     copyButton.className =
//       "copy-code absolute right-3 -top-3 rounded bg-muted px-2 py-1 text-xs leading-4 text-foreground font-medium";
//     copyButton.innerHTML = copyButtonLabel;
//     codeBlock.setAttribute("tabindex", "0");

//     // Append button to the wrapper, not the code block, to avoid issues if code block content changes
//     wrapper.appendChild(copyButton);
//     // console.log("attachCopyButtons: Added copy button to a code block wrapper.");


//     copyButton.addEventListener("click", async () => {
//       await copyCode(codeBlock, copyButton);
//     });
//   }

//   async function copyCode(block, button) {
//     const code = block.querySelector("code");
//     const text = code?.innerText;

//     if (!text) {
//         console.error("copyCode: Could not find code element or text within the block.");
//         button.innerText = "Error";
//          setTimeout(() => {
//           button.innerText = copyButtonLabel;
//         }, 1500);
//         return;
//     }

//     try {
//         await navigator.clipboard.writeText(text);
//         // console.log("copyCode: Code copied successfully.");
//         button.innerText = "Copied";
//     } catch (err) {
//         console.error("copyCode: Failed to copy text: ", err);
//         button.innerText = "Failed";
//     }


//     setTimeout(() => {
//       button.innerText = copyButtonLabel;
//     }, 1000);
//   }
//   console.log("attachCopyButtons function finished.");
// }

// --- Event Listeners ---
// Use a flag to prevent adding listeners multiple times if the script somehow executes more than once
if (!window.postDetailsListenersAdded) {
  console.log("Adding astro:page-load event listeners.");
  document.addEventListener("astro:page-load", initializePostDetailsScripts);
  document.addEventListener("astro:page-load", handleScrollToTop);
  window.postDetailsListenersAdded = true;
} else {
   console.log("Listeners already added, skipping.");
}

// Initial check in case script loads after initial page load is complete
// This is less likely with module scripts but acts as a safeguard.
// We check if the listener flag is set; if not, run initializers.
// This handles the case where astro:page-load might have fired *before* this script executed.
if (document.readyState === 'complete' && !window.postDetailsInitializedByLoadEvent) {
    console.log("Document already complete and initializers not run by astro:page-load yet. Running initializers now.");
    // Manually call the functions intended for astro:page-load
    initializePostDetailsScripts();
    handleScrollToTop();
    window.postDetailsInitializedByLoadEvent = true; // Set a flag indicating they ran
}

// Set flag within the event handlers themselves to be more precise
function initializePostDetailsScripts() {
  console.log(">>> astro:page-load event fired. Running initializations... <<<");
  window.postDetailsInitializedByLoadEvent = true; // Mark that load event triggered this

  requestAnimationFrame(() => {
    console.log("Running initializations inside requestAnimationFrame.");
    addHeadingLinks();
    // attachCopyButtons();
    console.log("Initializations inside requestAnimationFrame finished.");
  });
}

function handleScrollToTop() {
    console.log(">>> astro:page-load event fired. Scrolling to top. <<<");
    window.postDetailsInitializedByLoadEvent = true; // Mark that load event triggered this
    window.scrollTo({ left: 0, top: 0, behavior: "instant" });
}
