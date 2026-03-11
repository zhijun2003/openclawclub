import en from '@/locales/en.json';
import zh from '@/locales/zh.json';

export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['zh', 'en'];
export const defaultLocale: Locale = 'zh';

const dictionaries = {
  en,
  zh,
};

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment === 'en') return 'en';
  if (firstSegment === 'zh') return 'zh';
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove existing locale prefix so we can re-apply it consistently.
  const cleanPath = path.replace(/^\/(en|zh)/, '') || '/';

  if (locale === defaultLocale) {
    return cleanPath;
  }

  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  zh: '🇨🇳',
};
