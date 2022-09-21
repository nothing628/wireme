import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        id: "/",
        name: "Wireme",
        short_name: "Wireme",
        description: "Chat App",
        theme_color: "#246BFD",
        orientation: "portrait",
        icons: [
          {
            src: "192.png",
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
});
