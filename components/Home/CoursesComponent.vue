<template>
  <div id="home-courses">
    <section class="bg">
      <v-container>
        <h1 class="header">Programs and Courses Offered</h1>
        <h3 class="sub-header">For College</h3>
        <v-row justify="space-around">
            <v-spacer></v-spacer>
          <v-col cols="12" xl="4" md="5" sm="6">
            <v-sheet class="ma-2 pa-2" color="transparent">
              <h4 class="title">{{ titleDiploma }}</h4>
              <ul>
                <li v-for="(list, i) in coursesDiploma" :key="i">
                  {{ list.title }}
                </li>
              </ul>
              <div class="spacer"></div>
              <h4 class="title">{{ titleTesdaPrograms }}</h4>
              <ul>
                <li v-for="(list, i) in coursesTesdaPrograms" :key="i">
                  {{ list.title }}
                </li>
              </ul>
            </v-sheet>
          </v-col>
          
          <v-col cols="12" xl="4" md="5" sm="6">
            <v-sheet class="ma-2 pa-2" color="transparent">
              <h4 class="title">{{ titleChedPrograms }}</h4>
              <ul>
                <li v-for="(list, i) in coursesChedPrograms" :key="i">
                  {{ list.title }}
                </li>
              </ul>
       
            </v-sheet>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <div class="text-center mt-10 mb-7">
          <v-btn variant="outlined" rounded="0" size="large" color="green" to="/courses"> See More </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleDiploma: "TESDA Diploma Courses (3 Years)",
      coursesDiploma: [
        { title: "Hospitality Management and Technology (DHMT)" },
        { title: "Information Technology (DIT)" },
        { title: "Computer Technology (DCT)" },
        { title: "Computer Engineering (DCpE)" },
      ],
      titleTesdaPrograms: "TESDA Programs (2 Years)",
      coursesTesdaPrograms: [
        { title: "Hotel and Restaurant Services - NCII" },
        { title: "Institutional Health Care - NCII" },
      ],
      titleChedPrograms: "CHED Programs (4 Years / 5 Years)",
      coursesChedPrograms: [
        { title: "BS in Business Administration (Major in Marketing Management)" },
        { title: "BS in Business Administration (Major in Financial Management)" },
        { title: "BS in Hospitality Management" },
        { title: "BS in Tourism Management" },
        { title: "BS in Criminology" },
        { title: "BS in Computer Engineering" },
        { title: "BS in Information Technology" },
        { title: "BS in Computer Science" },
        { title: "Associate in Computer Technology" },
      ],
    };
  },
};
</script>
<style scoped>
.bg {
  background: #f5f5f5f5;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgb(0, 0, 0, 0.9)),
    url("/img/snc-building-front.jpg");
  padding: 40px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.header {
  color: rgb(45, 245, 45);
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 8px #000000;
  font-size: 35px;
  margin-bottom: 25px;
}
.sub-header {
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 23px;
  margin-bottom: 20px;
}
.title {
  color: rgb(16, 201, 16);
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 15px;
}
.spacer {
  margin: 30px 0px;
}
ul {
  list-style-position: inside;
  line-height: 2;
  color: white;
  font-size: 18px;
}
@media screen and (max-width: 450px) {
.header {
    font-size: 28px;
}
.title {
  text-align: center;
}
}
</style>
