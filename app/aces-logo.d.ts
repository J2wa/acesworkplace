import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type AcesLogoProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  size?: string | number;
  href?: string;
  target?: string;
  rel?: string;
  theme?: 'light' | 'dark' | 'mono' | 'auto';
  wordmark?: 'auto' | 'show' | 'hide';
  animate?: 'intro' | 'none';
  'data-animate'?: 'intro' | 'none';
  track?: 'on' | 'off';
  loading?: string | boolean;
  label?: string;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'aces-logo': AcesLogoProps;
    }
  }
}

export {};
