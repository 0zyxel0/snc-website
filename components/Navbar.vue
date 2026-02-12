<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary class="bg-green-darken-2">
      <v-list-item
        prepend-avatar="/img/logo.png"
        title="St. Nicolas College"
      ></v-list-item>

      <v-divider></v-divider>

      <!-- <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi:mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi:mdi-forum" title="About" value="about"></v-list-item>
        </v-list> -->
      <v-list>
        <div v-for="(item, i) in menus" :key="i">
          <!-- <v-list-item :to="item.route" active-class="teal--text text--accent-4">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title >{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
          <v-list-item
            :prepend-icon="item.icon"
            :title="item.title"
            :to="item.route"
          ></v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar flat height="80">
        <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-flex d-sm-none primary"
        ></v-app-bar-nav-icon
      >
      <v-avatar class="ml-16 d-none d-sm-flex" color="grey-darken-1" size="60">
        <v-img
        src="/img/logo.png"
        alt="John"
      ></v-img>
      </v-avatar>
      <v-toolbar-title> Vuetify App </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-list class="align-center d-none d-sm-flex pr-16" color="green">
        <v-list-item
          link
          v-for="(menu, index) in menus"
          :key="index"
          :to="menu.route"
        >
          <v-list-item-title class="text-button">{{ menu.title }}</v-list-item-title>
        </v-list-item>

        <v-btn variant="text"><v-icon>mdi:mdi-magnify</v-icon></v-btn>
        <v-btn variant="outlined" color="success">Get Started</v-btn>
      </v-list>
    </v-app-bar> -->

    <!-- <v-system-bar color="green-darken-3">
      <v-icon icon="mdi:mdi-wifi-strength-4"></v-icon>
      <v-icon icon="mdi:mdi-signal" class="ms-2"></v-icon>
      <v-icon icon="mdi:mdi-battery" class="ms-2"></v-icon>
      <span class="ms-2">3:13PM</span>
    </v-system-bar> -->
    <v-app-bar color="green" height="80">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-flex d-sm-none primary"
      ></v-app-bar-nav-icon>

      <v-avatar class="ml-16 d-none d-sm-flex" color="grey-darken-1" size="60">
        <v-img src="/img/logo.png" alt="John"></v-img>
      </v-avatar>
      <v-spacer></v-spacer>
      <v-btn
        class="d-none d-sm-flex"
        v-for="menu in menus"
        :key="menu"
        variant="text"
        flat
        :to="menu.route"
        rounded="0"
      >
        {{ menu.title }}
      </v-btn>

      <div class="mr-16"></div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 10,
      drawer: false,
      title: "Endorfine",
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
      menus: [
        { title: "Home", route: "/", icon: "mdi:mdi-home" },
        { title: "About Us", route: "about-us", icon: "mdi:mdi-information" },
        { title: "Courses", route: "courses", icon: "mdi:mdi-text-long" },
        // { title: "Gallery", route: "gallery", icon: "mdi:mdi-view-gallery" },
        { title: "Contact Us", route: "contact-us", icon: "mdi:mdi-phone" },
      ],
    };
  },
};
</script>
<style scoped>
.v-btn {
  height: 80px;
}
</style>
