import { BLOG_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";

export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true,
  raw = false
): string {
  if (!filePath) return id;

  // For raw directory paths (used in directory listing)
  if (raw) {
    return filePath
      .replace(BLOG_PATH + "/", "")
      .split("/")
      .slice(0, -1)
      .join("/");
  }

  // Remove base path and split
  const parts = filePath
    .replace(BLOG_PATH + "/", "")
    .split("/")
    .filter(Boolean);

  // For .md and .mdx files (posts)
  if (filePath.endsWith(".md") || filePath.endsWith(".mdx")) {
    // const pathParts = parts
    //   .slice(0, -1) // Remove filename
    //   .filter(part => !part.startsWith("_")); // Remove _index directories

    // const slug = id.split("/").pop() || id;

    // // Important: For posts, maintain the full path structure
    // return [
    //   includeBase ? "courses" : "",
    //   ...pathParts,
    //   slug.replace(/\.md$/, ""),
    // ]
    //   .filter(Boolean)
    //   .map(part => slugifyStr(part))
    //   .join("/");
    
    const pathSegments = filePath
      ?.replace(BLOG_PATH, "")
      .split("/")
      .filter(path => path !== "") // remove empty string in the segments ["", "other-path"] <- empty string will be removed
      .filter(path => !path.startsWith("_")) // exclude directories start with underscore "_"
      .slice(0, -1) // remove the last segment_ file name_ since it's unnecessary
      .map(segment => slugifyStr(segment)); // slugify each segment path

    const basePath = includeBase ? "/courses" : "";

    // Making sure `id` does not contain the directory
    const blogId = id.split("/");
    const slug = blogId.length > 0 ? blogId.slice(-1) : blogId;

    // If not inside the sub-dir, simply return the file path
    if (!pathSegments || pathSegments.length < 1) {
      return [basePath, slug].join("/");
    }

    return [basePath, ...pathSegments, slug].join("/");
  }

  // For directories
  return [
    includeBase ? "courses" : "",
    ...parts.filter(part => !part.startsWith("_")),
  ]
    .filter(Boolean)
    .map(part => slugifyStr(part))
    .join("/");
}

// /**
//  * Get full path of a blog post
//  * @param id - id of the blog post (aka slug)
//  * @param filePath - the blog post full file location
//  * @param includeBase - whether to include `/posts` in return value
//  * @returns blog post path
//  */
// export function getPath(
//   id: string,
//   filePath: string | undefined,
//   includeBase = true
// ) {
//   const pathSegments = filePath
//     ?.replace(BLOG_PATH, "")
//     .split("/")
//     .filter(path => path !== "") // remove empty string in the segments ["", "other-path"] <- empty string will be removed
//     .filter(path => !path.startsWith("_")) // exclude directories start with underscore "_"
//     .slice(0, -1) // remove the last segment_ file name_ since it's unnecessary
//     .map(segment => slugifyStr(segment)); // slugify each segment path

//   const basePath = includeBase ? "/courses" : "";

//   // Making sure `id` does not contain the directory
//   const blogId = id.split("/");
//   const slug = blogId.length > 0 ? blogId.slice(-1) : blogId;

//   // If not inside the sub-dir, simply return the file path
//   if (!pathSegments || pathSegments.length < 1) {
//     return [basePath, slug].join("/");
//   }

//   return [basePath, ...pathSegments, slug].join("/");
// }
