import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import daisyui from 'daisyui';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        plugins: [daisyui],
        daisyui: {
          themes: [
            {
              mytheme: {
                primary: "#4a90e2",
                secondary: "#67cba0",
                accent: "#f6ad55",
                neutral: "#2a2e37",
                "base-100": "#ffffff",
                info: "#2094f3",
                success: "#009485",
                warning: "#ff9900",
                error: "#ff5724",
              },
            },
            "light",
            "dark",
            "cupcake",
          ],
        },
      },
    }),
          ],
  server: {
    host: true,
    port: 5173,
    hmr: {
      port: 5174,
    },
  },
})
