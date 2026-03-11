import { Metadata } from 'next';
import ResourcesPage from '@/components/ResourcesPage';

const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://qingyun.ai';
const BASE_PATH = '/openclaw';

export const metadata: Metadata = {
  title: '全网资源聚合',
  description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
  alternates: {
    canonical: `${SITE_ORIGIN}${BASE_PATH}/resources`,
    languages: {
      en: `${SITE_ORIGIN}${BASE_PATH}/en/resources`,
      zh: `${SITE_ORIGIN}${BASE_PATH}/resources`,
    },
  },
  openGraph: {
    title: '全网资源聚合',
    description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
    type: 'website',
    url: `${SITE_ORIGIN}${BASE_PATH}/resources`,
    siteName: '清云AI · OpenClaw 专题',
    images: [
      {
        url: `${SITE_ORIGIN}${BASE_PATH}/og-image.png`,
        width: 1200,
        height: 630,
        alt: '全网资源聚合 - 清云AI · OpenClaw 专题',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '全网资源聚合',
    description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
    images: [`${SITE_ORIGIN}${BASE_PATH}/og-image.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: '全网资源聚合 - 清云AI · OpenClaw 专题',
  url: `${SITE_ORIGIN}${BASE_PATH}/resources`,
  description: '阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……一站式获取 OpenClaw 最佳教程。',
  inLanguage: 'zh-CN',
  isPartOf: {
    '@type': 'WebSite',
    name: '清云AI · OpenClaw 专题',
    url: `${SITE_ORIGIN}${BASE_PATH}`,
  },
};

export default function ZhResourcesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResourcesPage locale="zh" />
    </main>
  );
}
