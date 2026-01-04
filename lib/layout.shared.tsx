import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { HomeLayoutProps } from 'fumadocs-ui/layouts/home';
import { ThemeSelector } from '@/components/theme-selector';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Ops Docs',
    },
  };
}

export function homeOptions(): HomeLayoutProps {
  return {
    ...baseOptions(),
    links: [
      {
        type: 'custom',
        children: <ThemeSelector />,
      },
    ],
  };
}

export function docsOptions(): Partial<DocsLayoutProps> {
  return {
    ...baseOptions(),
    nav: {
      ...baseOptions().nav,
      children: <ThemeSelector />,
    },
  };
}
