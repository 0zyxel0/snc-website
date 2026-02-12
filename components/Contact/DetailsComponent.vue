<template>
  <div id="contact-us-details">
    <section class="bg">
      <v-container>
        <v-card>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="12" xl="4" md="4">
                <v-card elevation="0" color="transparent">
                  <v-card-text>
                    <v-row justify="center">
                      <v-col cols="12" xl="2" md="3" sm="5" class="icon">
                        <v-icon
                          icon="mdi:mdi-map-marker-outline"
                          size="70"
                          color="success"
                        ></v-icon>
                      </v-col>

                      <v-col cols="12" xl="10" md="9" sm="5">
                        <h2>Location:</h2>
                        <p>
                          Mel-Vi, Bldg., Jose Abad Santos Avenue, Rd., Dolores,
                          City of San Fernando, Pampanga, 2000
                        </p>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" xl="4" md="4">
                <v-card elevation="0" color="transparent">
                  <v-card-text>
                    <v-row justify="center">
                      <v-col cols="12" xl="2" md="3" sm="5" class="icon">
                        <v-icon
                          icon="mdi:mdi-email-outline"
                          size="70"
                          color="success"
                        ></v-icon>
                      </v-col>

                      <v-col cols="12" xl="10" md="9" sm="5">
                        <h2>Email:</h2>
                        <!-- <p>info@snc.edu.ph</p> -->
                        <p>stnicolascollegecsfp@gmail.com</p>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" xl="4" md="4">
                <v-card elevation="0" color="transparent">
                  <v-card-text>
                    <v-row justify="center">
                      <v-col cols="12" xl="2" md="3" sm="5" class="icon">
                        <v-icon
                          icon="mdi:mdi-map-marker"
                          size="70"
                          color="success"
                        ></v-icon>
                      </v-col>

                      <v-col cols="12" xl="10" md="9" sm="5">
                        <h2>Call:</h2>
                        <p>(045) 402-6108</p>
                        <p>(045) 402-6109</p>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.bg {
  padding: 60px 0px;
}
h2 {
  text-transform: capitalize;
  font-size: 25px;
  padding-bottom: 10px;
}
p {
  font-size: 14px;
  padding-right: 0px;
  color: #5f5e5e;
}
.icon {
  margin-bottom: 10px;
}
.v-card {
  box-shadow: 0 0 30px rgb(115 128 157 / 15%);
}
@media screen and (max-width: 450px) {
  .icon {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  p {
    
    text-align: center;
  }
  .sheet {
    height: auto;
    padding: 20px;
  }
}
</style>
