<template>
  <div id="conta-form-map">
    <section class="bg">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" xl="10">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="12" xl="6" md="6">
                    <GoogleMap
                      :api-key="apiKey"
                      style="width: 100%; height: 500px"
                      :center="center"
                      :zoom="16"
                    >
                      <Marker :options="markerOptions" />
                    </GoogleMap>
                  </v-col>
                  <v-col cols="12" xl="6" md="6">
                    <v-sheet class="mx-auto">
                      <v-form ref="form">
                        <v-text-field
                          v-model="name"
                          :counter="10"
                          :rules="nameRules"
                          label="Name"
                          required
                          variant="outlined"
                        ></v-text-field>

                        <v-text-field
                          :rules="emailRules"
                          label="Email address"
                          required
                          type="email"
                          v-model="email"
                          variant="outlined"
                        ></v-text-field>
                        <v-text-field
                          v-model="subject"
                          :counter="10"
                          :rules="subjectRules"
                          label="Subject"
                          required
                          variant="outlined"
                        ></v-text-field>

                        <v-textarea
                          label="Message"
                          v-model="message"
                          :rules="messageRules"
                          variant="outlined"
                        ></v-textarea>
                        <div class="d-flex flex-column">
                          <v-btn
                            color="success"
                            class="mt-4"
                            block
                            @click="send"
                          >
                            Send
                          </v-btn>
                        </div>
                      </v-form>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
    components: {
        GoogleMap,
        Marker
    },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    subject: "",
    subjectRules: [(v) => !!v || "Subject is required"],
    message: "",
    messageRules: [(v) => !!v || "Message is required"],
    apiKey: "AIzaSyDysAlAEL_Eo3Kz1GblaG191OX6V28gLe8",
    openedMarkerID: null,
    center: { lat: 15.04174, lng: 120.68315 },
    markerOptions: {
        position: {
            lat: 15.04174, lng: 120.68315
        },
        label: "SNC",
        title: "St. Nicolas College of Business and Technology"
    }
    //15.041741279697476, 120.68313875361407
  }),

methods: {
    async send() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Contact form currently not available!");
    },
  },
};
</script>
<style scoped>
.bg {
  background: #f5f5f5f5;
  padding: 60px 0px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.8)
    ),
    url("/img/snc-building-front.jpg");

  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.v-card {
  box-shadow: 0 0 30px rgb(115 128 157 / 15%);
  padding: 20px;
}

@media screen and (max-width: 450px) {
    .v-card {
        padding: 0px;
    }
}
</style>
