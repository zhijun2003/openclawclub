import ResourcesPage from '@/components/ResourcesPage';

// Compatibility alias for /zh/resources.
export { metadata } from '../../resources/page';

export default function ZhResourcesPage() {
  return (
    <main>
      <ResourcesPage locale="zh" />
    </main>
  );
}
