// vite.config.js
import plugin from 'tailwindcss';
import { defineConfig } from 'vite';
//import Mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    // https: true,
    host: '127.0.0.1',
    port: 8089,
  },
  build: {
    minify: true,
  },
  // esbuild: {
  //   drop: ['debugger'],
  //   pure: ['console.log', 'console.error', 'console.warn', 'console.debug', 'console.trace'],
  // },
  //plugins: [Mkcert()],
});
