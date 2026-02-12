<template>
  <div id="footer">
    <v-footer color="#222222" class="footer">
      <v-container>
        <v-row justify="center">
          <!-- -----------------------------------------------
        Fourth Column
      ----------------------------------------------- -->
          <v-col cols="12" md="3">
            <h4>About St. Nicolas College</h4>
            <p class="mt-5 mb-6 footer-about">
              St. Nicolas College of Business and Technology, strategically
              located at the Mel-Vi Bldg., Jose Abad Santos Avenue (formerly
              Olongapo-Gapan Rd.), Brgy. Dolores, City of San Fernando, Pampanga
              was founded in 2004.
            </p>
          </v-col>

          <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
          <v-col cols="12" md="3">
            <h4>Business Hour</h4>
            <p class="mt-5 mb-6">
              Our office are available to help you monday to saturday.
            </p>
            <v-row dense class="bh">
              <v-col cols="6">Monday - Friday</v-col>
              <v-col cols="6">8:00am - 5:00pm</v-col>
              <v-col cols="12"><hr /></v-col>
              <v-col cols="6">Saturday</v-col>
              <v-col cols="6">9:30am - 12:30pm</v-col>
              <v-col cols="12"><hr /></v-col>
              <v-col cols="6">Sunday</v-col> <v-col cols="6">Closed</v-col>
              <v-col cols="12"><hr /></v-col>
            </v-row>
          </v-col>

          <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
          <v-col cols="12" md="3">
            <h4>Contact Info</h4>
            <v-row dense class="mt-5 ci">
              <v-col cols="2"
                ><v-icon
                  size="large"
                  color="green-darken-2"
                  icon="mdi:mdi-map-marker-outline"
                  class="ci-icon"
                ></v-icon
              ></v-col>
              <v-col cols="10" class="mb-3">
                <h5>Address</h5>
                <p class="ci-desc">
                  Mel-Vi, Bldg., Jose Abad Santos Avenue, Rd., Dolores, City of
                  San Fernando, Pampanga
                </p>
              </v-col>
              <v-col cols="2"
                ><v-icon
                  size="large"
                  color="green-darken-2"
                  icon="mdi:mdi-phone-outline"
                  class="ci-icon"
                ></v-icon
              ></v-col>
              <v-col cols="10" class="mb-3">
                <h5>Phone</h5>
                <p class="ci-desc">(045) 402-6108</p>
                <p class="ci-desc">(045) 402-6109</p>
              </v-col>
              <v-col cols="2"
                ><v-icon
                  size="large"
                  color="green-darken-2"
                  icon="mdi:mdi-email-outline"
                  class="ci-icon"
                ></v-icon
              ></v-col>
              <v-col cols="10" class="mb-3">
                <h5>Email</h5>
                <p class="ci-desc">stnicolascollegecsfp@gmail.com</p>
              </v-col>
              <v-col cols="2"
                ><v-icon
                  size="large"
                  color="green-darken-2"
                  icon="mdi:mdi-link-variant"
                  class="ci-icon"
                ></v-icon
              ></v-col>
              <v-col cols="10">
                <h5>Message Us</h5>
                <p class="ci-desc">
                  <NuxtLink to="/contact-us" class="ci-link">
                    Message Us Now
                  </NuxtLink>
                </p>
              </v-col>
            </v-row>
          </v-col>

          <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
          <v-col cols="12" md="3">
            <h4>Navigation</h4>
            <v-list bg-color="transparent">
              <div v-for="(item, i) in menus" :key="i">
                <v-list-item
                  :prepend-icon="item.icon"
                  :title="item.title"
                  :to="item.route"
                  class="text-white"
                  :border="`1px`"
                >
                </v-list-item>
                <v-divider color="white"></v-divider>
              </div>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
    <v-footer absolute color="#1b1b1b">
      <v-row justify="center" no-gutters>
        <v-col class="text-center text-subtitle-2 text-grey my-4" cols="12">
         Copyright &copy; {{ new Date().getFullYear() }} — St. Nicolas College of Business and
          Technology. All right reserved.
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    menus: [
      { title: "Home", route: "/", icon: "mdi:mdi-home" },
      { title: "About Us", route: "about-us", icon: "mdi:mdi-information" },
      { title: "Courses", route: "courses", icon: "mdi:mdi-text-long" },
      // { title: "Gallery", route: "gallery", icon: "mdi:mdi-view-gallery" },
      { title: "Contact Us", route: "contact-us", icon: "mdi:mdi-phone" },
    ],
  }),
};
</script>
<style scoped>
.footer {
  padding: 45px 0;
}

h4 {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
}

p {
  color: #929292;
  font-size: 14px;
}

.bh {
  color: #929292;
  font-size: 14px;
}

.ci,
h5 {
  color: #929292;
  font-size: 14px;
}
.ci-desc {
  font-size: 14px;
}

.ci-icon {
  border: 1px solid #929292;
  border-radius: 10%;
  height: 40px;
  width: 40px;
}
.ci-link {
  text-decoration: none;
  color: #ffffff;
}
.ci-link:hover {
  color: green;
}

.footer-about {
  text-align: justify;
}
</style>
