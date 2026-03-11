import type { Metadata } from 'next';

const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://qingyun.ai';
const BASE_PATH = '/openclaw';

export const metadata: Metadata = {
  title: 'OpenClaw Resources — Curated Tutorials | QingyunAI · OpenClaw Topic',
  description:
    'Curated OpenClaw tutorials and guides from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy and more.',
  alternates: {
    canonical: `${SITE_ORIGIN}${BASE_PATH}/en/resources`,
  },
  openGraph: {
    title: 'OpenClaw Resources — Curated Tutorials | QingyunAI · OpenClaw Topic',
    description:
      'Curated OpenClaw tutorials and guides from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy and more.',
    type: 'website',
    url: `${SITE_ORIGIN}${BASE_PATH}/en/resources`,
    siteName: 'QingyunAI · OpenClaw Topic',
    images: [
      {
        url: `${SITE_ORIGIN}${BASE_PATH}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'OpenClaw Resources — Curated Tutorials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw Resources — Curated Tutorials | QingyunAI · OpenClaw Topic',
    description:
      'Curated OpenClaw tutorials and guides from Alibaba Cloud, Tencent Cloud, DigitalOcean, Bilibili, Codecademy and more.',
    images: [`${SITE_ORIGIN}${BASE_PATH}/og-image.png`],
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
