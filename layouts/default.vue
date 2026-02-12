<template>
  <v-app>
    <Navbar />
   <v-main>
      <slot />
    </v-main>

    <Footer />
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>
