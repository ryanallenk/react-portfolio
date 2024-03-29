interface Window {
  dataLayer: Array<object>;
}

type SetTimeout = ReturnType<typeof setTimeout>;

declare module 'no-op' {
  export default function noop(...args): void;
}

declare module '@jam3/stats' {
  export default function stats(): Stats;
}

declare module '*.svg' {
  const src: (props: React.SVGProps<SVGElement>) => React.ReactElement;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}
