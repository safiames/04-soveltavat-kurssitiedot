import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/04-soveltavat-kurssitiedot",
  plugins: [react()],
});
