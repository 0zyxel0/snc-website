// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      //viewport: "width=500, initial-scale=1",
      titleTemplate: '%s - Official Website',
      title: "St. Nicolas College of Business and Technology",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
    },
  },
  css: ["vuetify/styles"],
  vite: {
    // @ts-ignore
    // currently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
    ssr: {
      noExternal: ["vuetify"],
    },
  },

  modules: [
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify())
      );
    },
  ],
 build: { 
  transpile: ["@fawmi/vue-google-maps"] 
},
 runtimeConfig: {
  public: { GOOGLE_MAPS_API_KEY: 'AIzaSyDysAlAEL_Eo3Kz1GblaG191OX6V28gLe8'}
 }
});
