import { SUPPORTED_LOCALES } from "@config";
import type { Language } from "../types";
import getPostsByLocale from "@utils/getPostsByLocale";
export const languages: Language[] = [
  { code: SUPPORTED_LOCALES.en, label: "English" },
  { code: SUPPORTED_LOCALES.fr, label: "Français" },
];

export const defaultLang: SUPPORTED_LOCALES = SUPPORTED_LOCALES.en;

export const ui = {
  [SUPPORTED_LOCALES.en]: {
    "home.allPosts": "All posts",
    "nav.posts": "Posts",
    "nav.tags": "Tags",
    "nav.resume": "Resume",
    "nav.back": "Back",
    FIND_ME: "Find me on",
    "breadcrumb.home": "Home",
    "posts.pageTitle": "Posts",
    "posts.pageDesc": "Posts, conferences, and more",
    "posts.nextPage": "Next",
    "posts.prevPage": "Prev",
    "tags.pageTitle": "Tags",
    "tags.pageDesc": "All tags used in posts",
    "tags:tag.pageDesc": "All posts with the tag: ",
    "search.pageTitle": "Search",
    "search.pageDesc": "Search posts, conferences and more",
    "search.placeholder": "Search...",
  },
  [SUPPORTED_LOCALES.fr]: {
    "home.allPosts": "Tous les posts",
    "nav.posts": "Posts",
    "nav.tags": "Tags",
    "nav.resume": "CV",
    "nav.back": "Retour",
    FIND_ME: "Retrouvez-moi sur",
    "breadcrumb.home": "Accueil",
    "posts.pageTitle": "Posts",
    "posts.pageDesc": "Mes articles, conférences et plus encore",
    "posts.nextPage": "Suiv.",
    "posts.prevPage": "Prec.",
    "tags.pageTitle": "Tags",
    "tags.pageDesc": "Tous les tags utilisés dans les posts.",
    "tags:tag.pageDesc": "Tous les posts avec le tag:",
    "search.pageTitle": "Recherche",
    "search.pageDesc":
      "Recherchez des articles, des conférences et plus encore",
    "search.placeholder": "Rechercher...",
  },
} as const;
