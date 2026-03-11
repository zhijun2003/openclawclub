'use client';

import { useEffect, useRef } from 'react';
import { Dictionary } from '@/lib/i18n';

interface CommunityProps {
  locale: 'en' | 'zh';
  dict: Dictionary;
}

const itemsZh = [
  {
    icon: '📖',
    title: '官方文档',
    desc: '完整的 API 参考和使用指南',
    link: 'https://docs.openclaw.ai',
    color: 'hover:border-blue-300 hover:bg-blue-50',
  },
  {
    icon: '💬',
    title: 'Discord 社区',
    desc: '与数万开发者和用户交流',
    link: 'https://discord.com/invite/clawd',
    color: 'hover:border-indigo-300 hover:bg-indigo-50',
  },
  {
    icon: '🛒',
    title: '技能市场',
    desc: '发现、安装和分享 AI 技能',
    link: 'https://clawhub.com',
    color: 'hover:border-green-300 hover:bg-green-50',
  },
  {
    icon: '📦',
    title: 'OpenClaw GitHub',
    desc: '源代码 (279k+ ⭐) 和社区贡献',
    link: 'https://github.com/openclaw/openclaw',
    color: 'hover:border-gray-400 hover:bg-gray-50',
  },
  {
    icon: '📝',
    title: '飞书知识库',
    desc: '7 天入门指南 · 中文图文教程',
    link: 'https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf',
    color: 'hover:border-blue-300 hover:bg-blue-50',
  },
  {
    icon: '⭐',
    title: '清云API',
    desc: '清云AI 官方 API 服务入口，一站式调用多模型能力',
    link: 'https://api.echoflow.cn/',
    color: 'hover:border-yellow-300 hover:bg-yellow-50',
  },
];

const itemsEn = [
  {
    icon: '📖',
    title: 'Official Docs',
    desc: 'Complete API reference and usage guides',
    link: 'https://docs.openclaw.ai',
    color: 'hover:border-blue-300 hover:bg-blue-50',
  },
  {
    icon: '💬',
    title: 'Discord Community',
    desc: 'Chat with thousands of developers and users',
    link: 'https://discord.com/invite/clawd',
    color: 'hover:border-indigo-300 hover:bg-indigo-50',
  },
  {
    icon: '🛒',
    title: 'Skill Marketplace',
    desc: 'Discover, install, and share AI skills',
    link: 'https://clawhub.com',
    color: 'hover:border-green-300 hover:bg-green-50',
  },
  {
    icon: '📦',
    title: 'OpenClaw GitHub',
    desc: 'Source code (279k+ ⭐) and community contributions',
    link: 'https://github.com/openclaw/openclaw',
    color: 'hover:border-gray-400 hover:bg-gray-50',
  },
  {
    icon: '📝',
    title: 'Feishu Wiki',
    desc: '7-Day guide · Chinese tutorials',
    link: 'https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf',
    color: 'hover:border-blue-300 hover:bg-blue-50',
  },
  {
    icon: '⭐',
    title: 'Qingyun API',
    desc: 'QingyunAI official API gateway for multi-model AI services',
    link: 'https://api.echoflow.cn/',
    color: 'hover:border-yellow-300 hover:bg-yellow-50',
  },
];

export default function Community({ locale, dict }: CommunityProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isZh = locale === 'zh';
  const items = isZh ? itemsZh : itemsEn;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="community" ref={sectionRef} className="py-12 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* 小墨碎碎念 Banner 在清云AI版本中隐藏，仅保留下方社区与课程信息 */}

        {/* ── OpenClaw实践者社区 Banner (Chinese only) ── */}
        {isZh && (
          <div className="reveal mb-8 sm:mb-16 rounded-xl sm:rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #d946ef 100%)' }}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 md:p-10">
              {/* Content */}
              <div className="flex-1 min-w-0 text-center sm:text-left order-2 sm:order-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl md:text-3xl">👥</span>
                  <span className="font-bold text-lg sm:text-xl md:text-2xl text-white">OpenClaw 实践者社区</span>
                </div>
                <p className="text-white/90 text-sm sm:text-base mb-3 sm:mb-5">
                  回复「<span className="font-bold">OpenClaw</span>」自动拉群<br />
                  <span className="text-xs sm:text-sm">500+ AI 探索者 · 每周直播分享</span>
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-full text-white text-xs sm:text-sm">
                    <span>📱 公众号</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-full text-white text-xs sm:text-sm">
                    <span>💬 微信</span>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 order-1 sm:order-2">
                <div className="text-center">
                  <img
                    src="https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ5WFpjhn_la7AHZmTDlsf84BpwRCYbQACUiUAAvfBcFTUqknrigmVhjoE.png"
                    alt="微信二维码"
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg border-2 border-white/30 mb-1.5 mx-auto object-cover"
                  />
                  <p className="text-white text-xs font-medium">加微信进群</p>
                  <p className="text-white/60 text-[10px] mt-0.5">备注「OpenClaw」</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 视频课 Banner (Chinese only) ── */}
        {isZh && (
          <div className="reveal mb-8 sm:mb-16 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 md:p-10">
              {/* Content */}
              <div className="flex-1 min-w-0 text-center sm:text-left order-2 sm:order-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl md:text-3xl">🎬</span>
                  <span className="font-bold text-lg sm:text-xl md:text-2xl text-white">AI 私人助理实战课</span>
                </div>
                <p className="text-white/80 text-sm sm:text-base mb-2 sm:mb-4">
                  用 OpenClaw 打造 7×24 小时自动化工作流
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs">🔥 实战训练营</span>
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-xs">📹 视频教程</span>
                  <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-xs">¥199</span>
                </div>
                <p className="text-white/50 text-xs">
                  7 天打造你的智能私人助理 · 从入门到精通
                </p>
              </div>

              {/* QR Code */}
              <div className="text-center order-1 sm:order-2 shrink-0">
                <img
                  src="/video-course-qr-code.jpg"
                  alt="视频课二维码"
                  className="w-36 sm:w-44 md:w-52 rounded-xl mx-auto bg-white"
                />
                <p className="text-white/60 text-xs mt-2">扫码查看课程详情</p>
              </div>
            </div>
          </div>
        )}

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            👥 {isZh ? dict.community.badge : dict.community.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{dict.community.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{dict.community.subtitle}</p>
        </div>

        {/* Community cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
          {items.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal group block bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${item.color}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 group-hover:text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </a>
          ))}
        </div>

        {/* Open source banner */}
        <div className="reveal rounded-2xl bg-gray-900 text-white p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{isZh ? '开源共建' : 'Open Source Collaboration'}</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            {isZh
              ? <>清云AI · OpenClaw 专题是开源项目，致力于做最好的中文 OpenClaw 资源聚合站。<br />欢迎补充资源、改进内容、分享经验。</>
              : <>QingyunAI · OpenClaw Topic is open source, aiming to be the best resource hub for OpenClaw.<br />Contributions welcome — add resources, improve content, share your experience.</>
            }
          </p>
          <a
            href="https://github.com/mengjian-github/openclaw101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isZh ? '🌟 一起让 清云AI · OpenClaw 专题 变得更好' : '🌟 Help Make QingyunAI · OpenClaw Topic Better'}
          </a>
        </div>
      </div>
    </section>
  );
}
