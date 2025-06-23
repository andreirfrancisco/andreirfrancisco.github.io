
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import path from "path"
// https://vite.dev/config/
export default defineConfig({
 
  base : "/andreirfrancisco.github.io/",
  plugins: [react(), tailwindcss()],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})