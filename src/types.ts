import type { SUPPORTED_LOCALES } from "@config";
import { defaultLang, ui } from "./i18n/ui";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
  openInNewTab?: boolean;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type HeaderLink = {
  i18nKey: keyof (typeof ui)[typeof defaultLang];
  href: string;
};

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon";

export interface Language {
  code: SUPPORTED_LOCALES;
  label: string;
}
