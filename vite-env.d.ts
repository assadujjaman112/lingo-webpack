declare global {
  interface ImportMeta {
    readonly env: {
      readonly [key: string]: string | undefined;
    };
  }
}
