// vite.config.js
import { defineConfig } from 'vite';
import Mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    // https: true,
    // host: 'local.dev',
    port: 8089,
  },
  plugins: [Mkcert()],
});
