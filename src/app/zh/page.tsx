import HomePage from '@/components/HomePage';

// Compatibility alias for /zh (default locale is served at /).
export { metadata } from '../page';

export default function ZhHome() {
  return (
    <main>
      <HomePage locale="zh" />
    </main>
  );
}
