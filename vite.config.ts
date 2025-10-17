import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5173,
    open: true,
    proxy: {
      "/api": {
        target: "https://myresume-backend-wqc0.onrender.com",
        changeOrigin: true,
      },
    }
  },
  build: {
    sourcemap: true,
    outDir: "dist",
  },
});
