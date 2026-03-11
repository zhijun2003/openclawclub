import { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { SITE_ORIGIN, BASE_PATH } from '@/config/site';

export const metadata: Metadata = {
  title: 'QingyunAI · OpenClaw Topic - Master Your AI Assistant in 7 Days',
  description: 'The definitive guide to building your AI assistant with OpenClaw. Tutorials, skills, and community resources for your personal AI agent.',
  alternates: {
    canonical: `${SITE_ORIGIN}${BASE_PATH}/en`,
    languages: {
      en: `${SITE_ORIGIN}${BASE_PATH}/en`,
      zh: `${SITE_ORIGIN}${BASE_PATH}`,
    },
  },
  openGraph: {
    title: 'QingyunAI · OpenClaw Topic - Master Your AI Assistant in 7 Days',
    description: 'The definitive guide to building your AI assistant with OpenClaw.',
    type: 'website',
    url: `${SITE_ORIGIN}${BASE_PATH}/en`,
    siteName: 'QingyunAI · OpenClaw Topic',
    images: [
      {
        url: `${SITE_ORIGIN}${BASE_PATH}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'QingyunAI · OpenClaw Topic - Master Your AI Assistant in 7 Days',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QingyunAI · OpenClaw Topic - Master Your AI Assistant in 7 Days',
    description: 'The definitive guide to building your AI assistant with OpenClaw.',
    images: [`${SITE_ORIGIN}${BASE_PATH}/og-image.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'QingyunAI · OpenClaw Topic',
  url: `${SITE_ORIGIN}${BASE_PATH}/en`,
  description: 'Master your AI personal assistant in 7 days',
  inLanguage: 'en',
};

export default function EnHome() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage locale="en" />
    </main>
  );
}
