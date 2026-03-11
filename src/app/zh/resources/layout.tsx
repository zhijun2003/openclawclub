import type { Metadata } from 'next';

// Re-export the default (Chinese) metadata for /zh/resources.
export { metadata } from '../../resources/layout';

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
