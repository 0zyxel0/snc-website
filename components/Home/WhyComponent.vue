<template>
  <div id="home-why-snc">
    <section class="hero-header">
      <v-container>
        <v-row>
          <v-col cols="12" md="1" ></v-col>
          <v-col cols="12" md="5" sm="6">
            <v-sheet class="ma-2 pa-2" color="transparent">
              <v-img src="/img/Why-Us-Glow.png"></v-img
            ></v-sheet>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-sheet class="ma-2 pa-2" color="transparent">
              <h2 class="mb-7">{{ title }}</h2>
              <ul>
                <li v-for="(list, i) in datas" :key="i">
                  <v-icon start>mdi:mdi-check</v-icon> {{ list.title }}
                </li>
              </ul>
            </v-sheet>
            <!-- <v-card elevation="0" color="transparent"
              ><v-card-text>
                <h2>Why Student Enroll at SNC?</h2>
              </v-card-text></v-card
            > -->
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
      title: "Why Student's Enroll at SNC?",
      datas: [
        { title: "No entrance test" },
        { title: "Easy payment plan" },
        { title: "Minimum down payment of Php.500" },
        { title: "Lowest tuition fee scheme" },
        { title: "Complete facilities" },
        { title: "Fully air-conditioned rooms" },
        { title: "Highly qualified and competent instructors" },
        { title: "DepEd recognized (SHSP No. 104 S.2015)" },
        { title: "CHED and TESDA recognized programs" },
        { title: "With local and international industry partners" },
        { title: "Various scholarship programs" },
        { title: "A training center to intensify skills" },
      ],
    };
  },
};
</script>
<style scoped>
.hero-header {
  /* height: 400px; */
  /* text-align: center; */
  background: #f5f5f5f5;
  /* background: linear-gradient(rgba(48, 48, 48, 0.1), rgb(48, 48, 48, 0.1)); */
  background: linear-gradient(rgba(10, 167, 44, 0.9), rgba(0, 0, 0, 0.8)),
    url("/img/snc-building.jpg");
  padding: 40px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  /* width: 100%;
  color: white;
  overflow: hidden;
  background: #c04848;
  background: linear-gradient(rgb(72, 0, 72, 0.8), rgb(192, 72, 72, 0.8)),
    url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg");
  background: linear-gradient(rgb(72, 0, 72, 0.8), rgb(192, 72, 72, 0.8)),
    url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg"); 
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; */
}
h2 {
  font-size: 30px;
  text-transform: uppercase;
  color: #ffffff;
}
ul {
  list-style-type: none;
  line-height: 2;
  color: #ffffff;
  font-size: 19px;
}
.v-img {
  transition: 0.1s ease-in;
}
.v-img:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 450px) {
  h2 {
    text-align: center;
    font-size: 28px;
  }
}
</style>
