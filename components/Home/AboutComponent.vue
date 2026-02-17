<template>
  <div id="home-about">
    <section class="bg">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" xl="5" md="8" sm="7">
            <v-sheet class="pa-2 ma-2">
              <h1 class="title">Few Words About Us</h1>
              <p class="description">
                St. Nicolas College of Business and Technology was founded in
                2004. One of its noble missions is the pursuit of global
                competitiveness and the establishment of a school that would
                address the current demands of industries, thus consequentially
                benefiting the business sectors and the labor force.
              </p>
              <v-sheet class="text-body-2" color="transparent">
                <v-row>
                  <v-col cols="12" lg="3" sm="3" class="icon">
                    <v-icon
                      icon="mdi:mdi-eye-circle-outline"
                      size="90"
                      color="success"
                    ></v-icon>
                  </v-col>

                  <v-col cols="12" lg="9" sm="9">
                    <h1 class="mb-3 spacer">VISION</h1>
                    <p class="mb-5 spacer">
                      A center of excellence in academic and technical skills
                      programs in pursuing dynamic opportunities parallel to
                      global standards, thereby, uplifting the socio-economic
                      growth of the country.
                    </p>
                  </v-col>
                  <v-col cols="12" lg="3" sm="3" class="icon">
                    <v-icon
                      icon="mdi:mdi-bullseye-arrow"
                      size="90"
                      color="success"
                    ></v-icon>
                  </v-col>

                  <v-col cols="12" lg="9" sm="9">
                    <h1 class="mb-3 spacer">MISSION</h1>
                    <p class="mb-4 spacer">
                      A center of excellence in academic and technical skills
                      programs in pursuing dynamic opportunities parallel to
                      global standards, thereby, uplifting the socio-economic
                      growth of the country.
                    </p>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-sheet>
          </v-col>
          <v-col cols="12" xl="5" md="4" sm="5">
            <v-img
              src="img/snc-logo-updated.png"
              class="d-none d-sm-flex mx-auto logo-img"
              width="450"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
};
</script>
<style scoped>
.bg {
  padding: 60px 0px;
}
.title {
  padding-bottom: 10px;
}
.description {
  padding-bottom: 40px;
}
.centered-container {
  align-items: center;
  justify-content: center;
}
.logo-img {
  transition: 0.1s ease-in;
}
.logo-img:hover {
  transform: scale(0.9);
}
@media screen and (max-width: 450px) {
  .title {
    font-size: 28px;
    text-align: center;
  }
  .description {
    text-align: center;
  }
  .spacer {
    padding: 0px 10px;
    text-align: center;
  }
  .icon {
    text-align: center;
  }
}
</style>
