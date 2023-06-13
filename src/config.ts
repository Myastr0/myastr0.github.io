import type { HeaderLink, Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://myastr0.github.io",
  author: "Leo DUMON",
  desc: "Mon blog perso",
  title: "Léo Dumon",
  ogImage: "ldmn-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export enum SUPPORTED_LOCALES {
  en = "en",
  fr = "fr",
}

export const DATETIME_LOCALE = ["fr-FR"]; // set to [] to use the environment default

export const HEADER_LINKS: HeaderLink[] = [
  {
    i18nKey: "nav.posts",
    href: "/posts",
  },
  {
    i18nKey: "nav.tags",
    href: "/tags",
  },
  {
    i18nKey: "nav.resume",
    href: "/resume",
  },
];
export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Myastr0",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
    openInNewTab: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/l%C3%A9o-dumon-67903b107",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hello@ldmn.fr",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
    openInNewTab: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Myastro__",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
    openInNewTab: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
    openInNewTab: true,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];

export const DEFAULT_LOCALE = SUPPORTED_LOCALES.fr;
