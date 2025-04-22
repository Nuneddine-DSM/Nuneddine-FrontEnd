declare module 'process' {
  export const env: {
    BASE_URL: string;
    API_KEY: string;
  };
}