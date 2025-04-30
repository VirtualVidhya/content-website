import { statSync } from "node:fs";
// import { visit } from "unist-util-visit";

/**
 * Remark plugin to automatically inject file creation (birthtime) and
 * modification (mtime) timestamps into frontmatter if they are missing.
 *
 * - Sets `pubDatetime` to the file's birth time (creation).
 * - Sets `modDatetime` to the file's last modification time.
 */
export function remarkInjectTimestamps() {
  return function (tree, file) {
    // Ensure frontmatter object exists
    file.data.astro.frontmatter = file.data.astro.frontmatter || {};

    try {
      // Get file stats using the absolute path provided by vfile
      const stats = statSync(file.path);

      // Inject pubDatetime if not already present
      if (!file.data.astro.frontmatter.pubDatetime) {
        file.data.astro.frontmatter.pubDatetime = stats.birthtime;
      }

      // Inject modDatetime if not already present
      // Always update modDatetime to reflect the latest file change
      // (Comment out the check if you always want the latest mtime)
      // if (!file.data.astro.frontmatter.modDatetime) {
      file.data.astro.frontmatter.modDatetime = stats.mtime;
      // }
    } catch (err) {
      // Log error if file stats cannot be read
      console.error(`Error reading file stats for ${file.path}:`, err);
      // Optionally, set default dates or throw an error
      // file.data.astro.frontmatter.pubDatetime = file.data.astro.frontmatter.pubDatetime ?? new Date();
      // file.data.astro.frontmatter.modDatetime = file.data.astro.frontmatter.modDatetime ?? new Date();
    }

    // Optional: Log the injected dates for debugging
    // console.log(`Injected timestamps for ${file.path}:`, {
    //   pubDatetime: file.data.astro.frontmatter.pubDatetime,
    //   modDatetime: file.data.astro.frontmatter.modDatetime,
    // });
  };
}

export default remarkInjectTimestamps;
