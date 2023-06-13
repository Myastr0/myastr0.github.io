import type { CollectionEntry } from "astro:content";
import type { SUPPORTED_LOCALES } from "@config";

const getPostsByLocale = (
  posts: CollectionEntry<"blog">[],
  locale: SUPPORTED_LOCALES
) =>
  posts.filter(post => {
    const [lang, ...slug] = post.slug.split("/");

    return lang === locale;
  });

export default getPostsByLocale;
