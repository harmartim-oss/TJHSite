import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages on a repo site, set base to the repo path (e.g. '/TJHSite/').
// If you deploy to a custom domain, use an environment variable or change to '/'.
const DEFAULT_BASE = process.env.VITE_BASE ?? '/TJHSite/';

export default defineConfig({
  plugins: [react()],
  base: DEFAULT_BASE,
  build: {
    // Put build output into docs/ so GitHub Pages can serve from main branch /docs
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});