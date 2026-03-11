import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://qingyun.ai';
const BASE_PATH = '/openclaw';

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_ORIGIN}${BASE_PATH}`),
  title: {
    default: '清云AI · OpenClaw 专题 - 7天掌握你的AI私人助理 | 免费教程',
    template: '%s | 清云AI · OpenClaw 专题',
  },
  description: '免费 7 天教程带你掌握 OpenClaw（Clawdbot/Moltbot）。从安装到技能、自动化与资源库，完整搭建你的 AI 私人助理。',
  keywords: [
    '清云AI', 'OpenClaw', 'OpenClaw 专题', 'OpenClaw 教程',
    'Clawdbot', 'Moltbot', 'AI assistant', 'AI Agent', 'personal AI',
    'Telegram bot', 'self-hosted AI', 'open source AI', 'AI automation',
    'OpenClaw skills', 'OpenClaw installation', 'OpenClaw setup',
    '7 day AI tutorial', 'AI助理', 'AI私人助手', '开源AI'
  ],
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: '清云AI · OpenClaw 专题 - 7天掌握你的AI私人助理',
    description: '免费 7 天教程：用 OpenClaw 搭建你的 AI 私人助理，包含技能生态与资源库。',
    url: `${SITE_ORIGIN}${BASE_PATH}`,
    siteName: '清云AI · OpenClaw 专题',
    images: [
      {
        url: `${SITE_ORIGIN}${BASE_PATH}/og-image.png`,
        width: 1200,
        height: 630,
        alt: '清云AI · OpenClaw 专题 - AI Assistant Tutorial',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '清云AI · OpenClaw 专题 - 7天掌握你的AI私人助理',
    description: '免费 7 天教程：用 OpenClaw 搭建你的 AI 私人助理。',
    images: [`${SITE_ORIGIN}${BASE_PATH}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_ORIGIN}${BASE_PATH}`,
    languages: {
      en: `${SITE_ORIGIN}${BASE_PATH}/en`,
      zh: `${SITE_ORIGIN}${BASE_PATH}`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}${BASE_PATH}/#website`,
      url: `${SITE_ORIGIN}${BASE_PATH}`,
      name: '清云AI · OpenClaw 专题',
      description: 'OpenClaw AI 助理的系统化学习专题',
      inLanguage: ['zh', 'en'],
    },
    {
      '@type': 'Course',
      '@id': `${SITE_ORIGIN}${BASE_PATH}/#course`,
      name: 'OpenClaw 7-Day Tutorial',
      description: 'Learn to build and customize your own AI personal assistant with OpenClaw in 7 days',
      provider: {
        '@type': 'Organization',
        name: '清云AI · OpenClaw 专题',
        url: `${SITE_ORIGIN}${BASE_PATH}`,
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'P7D',
      },
      numberOfLessons: 7,
      teaches: ['AI Assistant Setup', 'OpenClaw Configuration', 'Skills Development', 'Automation'],
      isAccessibleForFree: true,
      availableLanguage: ['zh', 'en'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_ORIGIN}${BASE_PATH}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is OpenClaw?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OpenClaw is an open-source AI agent framework that lets you build a self-hosted personal AI assistant. It connects to services like Telegram, Gmail, Google Calendar, and web browsers, and can execute code, automate tasks, and manage your digital life 24/7. It was formerly known as Clawdbot and Moltbot.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is OpenClaw free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, OpenClaw is fully open-source and free to use. You only pay for the AI model API costs and server hosting.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I install OpenClaw?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You need a Linux server (Ubuntu 22.04+ recommended), Node.js 20+, and an API key for your chosen AI model. Clone the repository, run the setup wizard, configure your Telegram bot token, and start the gateway. The Day 2 tutorial covers this step by step.',
          },
        },
        {
          '@type': 'Question',
          name: 'What AI models does OpenClaw support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OpenClaw supports Anthropic Claude, OpenAI GPT-4, Google Gemini, xAI Grok, and any model available through OpenRouter.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can an OpenClaw assistant do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An OpenClaw assistant can manage email, schedule calendar events, browse the web with a real browser, write and execute code, analyze SEO data, create content, monitor websites, and automate workflows through its skills system.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
