<template>
    <div id="courses-shs">
      <section class="bg">
        <v-container>
          <h3 class="sub-header">For Senior High School</h3>
          <v-row justify="space-around">
              <v-spacer></v-spacer>
            <v-col cols="12" xl="4" md="5" sm="6">
              <v-sheet class="ma-2 pa-2" color="transparent">
                <h4 class="title">{{ titleTechVoc }}</h4>
                <p class="sub-title">Home-Economics</p>
                <ul class="mb-8">
                  <li v-for="(list, i) in coursesTechVocHE" :key="i">
                    {{ list.title }}
                  </li>
                </ul>
                <p class="sub-title">Information Communication Technology</p>
                <ul>
                  <li v-for="(list, i) in coursesTechVocICT" :key="i">
                    {{ list.title }}
                  </li>
                </ul>
              </v-sheet>
            </v-col>
            
            <v-col cols="12" xl="4" md="5" sm="6">
              <v-sheet class="ma-2 pa-2" color="transparent">
                <h4 class="title">{{ titleAcademicTrack }}</h4>
                <ul>
                  <li v-for="(list, i) in coursesAcademicTrack" :key="i">
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
        titleTechVoc: "Technical-Vocational Livelihood Track",
        coursesTechVocHE: [
          { title: "Bartending" },
          { title: "Cookery" },
          { title: "Tour Guiding Services" },
          { title: "Front Office" },
          { title: "Bread and Pastry" },
          { title: "Food and Beverages Services" },
        ],
        coursesTechVocICT: [
          { title: "Computer Systems Servicing" },
          { title: "Computer Programming" },
        ],
        titleAcademicTrack: "Academic Track",
        coursesAcademicTrack: [
          { title: "Humanities and Social Sciences (HUMSS) Strand" },
          { title: "Accountancy, Business Management (ABM) Strand" },
          { title: "Science, Technology, Engineering and Mathematics (STEM) Strand" },
          { title: "General Academic Strand (GAS)" },
        ],
      };
    },
  };
  </script>
  <style scoped>
  .bg {
    background: #f5f5f5f5;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgb(0, 0, 0, 0.9)),
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
    font-size: 25px;
    margin-bottom: 20px;
  }
  .title {
    color: rgb(16, 201, 16);
    text-transform: uppercase;
    font-size: 22px;
    margin-bottom: 25px;
    
  }
  .sub-title {
    color: #FFFFFF;
    text-transform: uppercase;
    font-size: 19px;
    margin-bottom: 10px;
    
    
  }
  .spacer {
    margin: 30px 0px;
  }
  ul {
    list-style-position: inside;
    line-height: 2;
    color: white;
    font-size: 19px;
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
  