// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/reset.css"],
  vite: {
    server: {
      proxy: {
        "/v4": {
          target: "https://api.football-data.org/",
          changeOrigin: true,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      appMode: process.env.NODE_ENV,
    },
  },
});
