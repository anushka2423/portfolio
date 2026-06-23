import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { leetcodeGraphqlPlugin } from "./vite/leetcodeGraphqlPlugin.js";

export default defineConfig({
  plugins: [react(), leetcodeGraphqlPlugin()],
});
