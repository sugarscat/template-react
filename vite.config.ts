import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    visualizer({
      open: false,
      gzipSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // manualChunks(id) {
        //   if (id.includes("node_modules")) {
        //     return "node_modules";
        //   }
        // },
        // chunkFileNames: () => {
        //   return 'assets/[name]-[hash].js';
        // },
      },
    },
  }
});
