<template>
  <div id="about-mission-vision">
    <section class="bg">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" xl="5" md="6" sm="7">
            <v-sheet class="sheet">
              <v-row>
                <v-col cols="12" xl="2" md="3" sm="5" class="icon">
                  <v-icon
                    icon="mdi:mdi-eye-circle-outline"
                    size="90"
                    color="success"
                  ></v-icon>
                </v-col>

                <v-col cols="12" xl="10" md="9" sm="5">
                  <h2>VISION</h2>
                  <p>
                    A center of excellence in academic and technical skills
                    programs in pursuing dynamic opportunities parallel to
                    global standards, thereby, uplifting the socio-economic
                    growth of the country.
                  </p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
          <v-col cols="12" xl="5" md="6" sm="5">
            <v-sheet class="sheet">
              <v-row>
                <v-col cols="12" xl="2" md="3" sm="5" class="icon">
                  <v-icon
                    icon="mdi:mdi-bullseye-arrow"
                    size="90"
                    color="success"
                  ></v-icon>
                </v-col>

                <v-col cols="12" xl="10" md="9" sm="5">
                  <h2>MISSION</h2>
                  <p>
                    To develop and provide high quality academic and technical
                    skills programs that would ensure employability and
                    productivity of young men and women through proper values
                    and principles as means to achieve success with excellence
                    for a better quality of life.
                  </p>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>

        <!-- <v-row justify="center">
          <v-col cols="12" xl="6" md="5" sm="6"> </v-col>
          <v-col cols="12" xl="6" md="5" sm="6"> </v-col>
        </v-row> -->
      </v-container>
    </section>
  </div>
</template>
<style scoped>
.bg {
  background: #f7f7f7;
  padding: 20px 0;
}
h2 {
  text-transform: uppercase;
  font-size: 20px;
  padding-bottom: 20px;
  color: green;
}
p {
  padding-bottom: 20px;
  text-align: justify;
  padding-right: 0px;
}
.sheet {
  padding: 30px 30px;

  border-radius: 10px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1); */
  box-shadow: 0 0 30px rgb(115 128 157 / 10%);
  min-height: 275px;
}
.icon {
  margin-bottom: 10px;
}
@media screen and (max-width: 450px) {
  .icon {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  p {
    margin-bottom: 20px;
  }
  .sheet {
    height: auto;
    padding: 20px;
  }
}
</style>
