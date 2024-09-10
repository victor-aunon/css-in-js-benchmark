import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from '@astrojs/node'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'


// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    define: {
      global: 'globalThis',
      process,
    },
    plugins: [ NodeGlobalsPolyfillPlugin({
      buffer: true,
      process: true,
    })],
    optimizeDeps: {
      define: {
        global: 'globalThis',
        process,
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
      ],
    },
    ssr: {
      noExternal: true,
    }
  }
});