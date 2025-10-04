import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GH_PAGES_BASE will be set by the workflow to "/<repo-name>/"
export default defineConfig({
  plugins: [react()],
  base: process.env.GH_PAGES_BASE || "/"
});
