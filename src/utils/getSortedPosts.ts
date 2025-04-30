import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .sort((a, b) => {
      const orderA = a.data.order ?? Infinity;
      const orderB = b.data.order ?? Infinity;

      if (orderA !== orderB) {
        return orderA - orderB; // Sort by order ascending
      }

      // Fallback to date sorting (newest first) if order is the same or not present
      // Using pubDatetime consistently as modDatetime might not always be desired for ordering
      return b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf();
    });
};

export default getSortedPosts;
