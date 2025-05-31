import { defineConfig } from "vite"
import path from "path"
const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig({
  build: {
    lib: {
      entry: {
        "index": path.resolve(__dirname, "lib/index.js"),
      },
      formats: ["es"]
    }
  }
})
