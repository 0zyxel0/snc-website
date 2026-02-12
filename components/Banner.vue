<template>
  <div id="banner">
    <div class="mini-spacer">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12">
            <div>
              <h2 class="title font-weight-bold">{{ title }}</h2>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "No Title",
    },
  },
};
</script>
<style scoped>
.bg {
  background: #f5f5f5f5;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(86, 192, 72, 0.8)),
    url("/img/snc-building.jpg");
  /* background: linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url("/img/snc-building.jpg"); */
  padding: 75px 0px;
  background-size: cover;
  background-repeat: no-repeat;
}
.title {
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 40px;
  position: relative;
  padding: 0 0 5px;
}
.title:after {
  content: "";
  background: #0aaf12;
  width: 50px;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
.mini-spacer {
  padding: 75px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(86, 192, 72, 0.8)),
    url("/img/snc-building.jpg");
}
@media screen and (max-width: 450px) {
    .mini-spacer {
        padding: 30px 0;
    }
    .title {
        font-size: 30px;
    }
}
</style>
