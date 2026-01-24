import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // 0.0.0.0 ensures the server is accessible via your VPS IP address
    host: "0.0.0.0",
    // 5173 is the default Vite port and avoids conflicts with your Next.js sites (3000+)
    port: 5173,
    // strictPort prevents Vite from automatically switching to a port that might be in use
    strictPort: true,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));