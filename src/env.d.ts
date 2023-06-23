/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_PROXY_PASS: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_WEBSOKCET_SERVER_URL: string;
}

declare module 'js-md5';
