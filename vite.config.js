import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from https://<user>.github.io/portfolio/
  // so every built asset path needs that /portfolio/ prefix. If you rename
  // the repo, update this to match (e.g. '/new-repo-name/').
  base: '/portfolio/',
})
