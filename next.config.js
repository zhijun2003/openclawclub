const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/openclaw',
  assetPrefix: '/openclaw',
  async redirects() {
    return [
      // Keep local preview convenient: open "/" and land on the topic home.
      { source: '/', destination: '/openclaw', permanent: false, basePath: false },
    ];
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

module.exports = withMDX(nextConfig);
