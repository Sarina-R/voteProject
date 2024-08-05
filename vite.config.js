import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://github.com/Sarina-R/voteProject
export default defineConfig({
  plugins: [react()],
  base: "/voteProject/",
});
