<template>
    <div id="courses-college">
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
          { title: "Computer Engineering (CDpE)" },
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
          { title: "Associate in Computer Technology (2 Years)" },
        ],
      };
    },
  };
  </script>
  <style scoped>
  .bg {
    background: #f5f5f5f5;
    padding: 40px 0px;
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
      url("/img/snc-building-front.jpg");
   
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .header {
    color: rgb(14, 165, 14);
    text-align: center;
    text-transform: uppercase;
    /* text-shadow: 1px 1px 8px #000000; */
    font-size: 35px;
    margin-bottom: 45px;
    position: relative;
  padding: 0 0 5px;
  }
  .header:after {
  content: "";
  background: #0aaf12;
  width: 50px;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
  .sub-header {
    /* color: white; */
    text-align: center;
    text-transform: uppercase;
    font-size: 25px;
    margin-bottom: 20px;
  }
  .title {
    color: rgb(14, 165, 14);
    text-transform: uppercase;
    font-size: 22px;
    margin-bottom: 15px;
  }
  .spacer {
    margin: 30px 0px;
  }
  ul {
    list-style-position: inside;
    line-height: 2;
    /* color: white; */
    font-size: 19px;
  }
  @media screen and (max-width: 450px) {
  .header {
      font-size: 28px;
  }
  .title {
    text-align: center;
  }
  /* ul {
    font-size: ;
  } */
  }
  </style>
  