// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@sidebase/nuxt-auth"],
  auth: {
    baseURL: "https://dummyjson.com/auth",
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/login", method: "post" },
        getSession: { path: "/me", method: "get" },
      },
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
});
