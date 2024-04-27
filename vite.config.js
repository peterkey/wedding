import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/wedding/",
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /\.jsx$/,
    exclude: [],
  },
});
