import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Config Vite : React + Tailwind (plugin officiel v4, pas besoin de postcss.config.js)
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
