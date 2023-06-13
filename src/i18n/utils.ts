import { ui, defaultLang } from "./ui";
import type { SUPPORTED_LOCALES } from "@config";

export const getLangFromUrl = (url: URL): SUPPORTED_LOCALES => {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
};

export function useTranslations(lang: string) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    // @ts-ignore
    return ui[lang][key] || ui[defaultLang][key];
  };
}
