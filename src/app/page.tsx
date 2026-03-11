import { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { SITE_ORIGIN, BASE_PATH } from '@/config/site';

export const metadata: Metadata = {
  title: '清云AI · OpenClaw 专题 - 7天掌握你的AI私人助理',
  description: '从零开始，7天掌握你的AI私人助理。教程、技能和社区资源一站式获取。',
  alternates: {
    canonical: `${SITE_ORIGIN}${BASE_PATH}`,
    languages: {
      en: `${SITE_ORIGIN}${BASE_PATH}/en`,
      zh: `${SITE_ORIGIN}${BASE_PATH}`,
    },
  },
  openGraph: {
    title: '清云AI · OpenClaw 专题 - 7天掌握你的AI私人助理',
    description: '从零开始，7天掌握你的AI私人助理',
    type: 'website',
    url: `${SITE_ORIGIN}${BASE_PATH}`,
    siteName: '清云AI · OpenClaw 专题',
    images: [
      {
        url: `${SITE_ORIGIN}${BASE_PATH}/og-image.png`,
        width: 1200,
        height: 630,
        alt: '清云AI · OpenClaw 专题 - 7天掌握你的AI私人助理',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '清云AI · OpenClaw 专题 - 7天掌握你的AI私人助理',
    description: '从零开始，7天掌握你的AI私人助理',
    images: [`${SITE_ORIGIN}${BASE_PATH}/og-image.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '清云AI · OpenClaw 专题',
  url: `${SITE_ORIGIN}${BASE_PATH}`,
  description: '从零开始，7天掌握你的AI私人助理',
  inLanguage: 'zh-CN',
};

export default function ZhHome() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage locale="zh" />
    </main>
  );
}
