import { Metadata } from 'next';
import ResourcesPage from '@/components/ResourcesPage';
import { SITE_ORIGIN, BASE_PATH } from '@/config/site';

export const metadata: Metadata = {
  title: 'Resource Hub',
  description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
  alternates: {
    canonical: `${SITE_ORIGIN}${BASE_PATH}/en/resources`,
    languages: {
      en: `${SITE_ORIGIN}${BASE_PATH}/en/resources`,
      zh: `${SITE_ORIGIN}${BASE_PATH}/resources`,
    },
  },
  openGraph: {
    title: 'Resource Hub',
    description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
    type: 'website',
    url: `${SITE_ORIGIN}${BASE_PATH}/en/resources`,
    siteName: 'QingyunAI · OpenClaw Topic',
    images: [
      {
        url: `${SITE_ORIGIN}${BASE_PATH}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Resource Hub - QingyunAI · OpenClaw Topic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resource Hub',
    description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
    images: [`${SITE_ORIGIN}${BASE_PATH}/og-image.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Resource Hub - QingyunAI · OpenClaw Topic',
  url: `${SITE_ORIGIN}${BASE_PATH}/en/resources`,
  description: 'One-stop access to the best OpenClaw tutorials from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy, IBM and more.',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'QingyunAI · OpenClaw Topic',
    url: `${SITE_ORIGIN}${BASE_PATH}`,
  },
};

export default function EnResourcesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResourcesPage locale="en" />
    </main>
  );
}
