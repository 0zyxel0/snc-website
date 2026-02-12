import { createVuetify, ThemeDefinition } from "vuetify";

import { aliases, fa } from 'vuetify/iconsets/fa'
import {mdi} from "vuetify/lib/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

const myTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#2196F3",
    error: "#F44336",
    info: "#00BCD4",
    success: "#4CAF50",
    warning: "#FFC107",
  },
};
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "myTheme",
      themes: {
        myTheme,
      },
    },
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            mdi,
            fa
        }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
