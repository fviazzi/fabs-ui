import path from "path"
import react from "@vitejs/plugin-react"
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      input: 'src/index.tsx',
    },
  },
  server: {
    port: 3000,
  },
});
