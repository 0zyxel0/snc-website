<template>
  <div id="about-philosophy-core">
    <section class="bg">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" xl="5" md="6" sm="7">
            <v-img src="img/snc-building-front.jpg" cover class="mx-auto logo-img"></v-img>
          </v-col>
          <v-col cols="12" xl="4" md="5" sm="5">
            <v-row>
              <v-col cols="12">
                <h2>Core Values</h2>
                <p>
                  To realize the mission and vision of Saint Nicolas College,
                  the administrative staff, faculty members, support personnel,
                  students and stakeholders resolve to live by the following
                  core values;
                </p>
                <p>
                  Willingness to Excel through Sincerity, Hardwork, Oneness,
                  Understanding, Love, Dedication, Discipline and Openness.
                </p>
              </v-col>
              <v-col cols="12">
                <h2>Philosophy</h2>
                <p>
                  The paramount goal of ST. NICOLAS COLLEGE of Business &
                  Technology is to empower the studentry, through proper
                  education and training, with a solid foundation of knowledge,
                  skills amd moral values necessary in the attainment of their
                  potentials thereby enabling them to be competitive citizens of
                  our country.
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<style scoped>
.bg {
  padding: 50px 0;
  background: #f7f7f7;
  background: #f5f5f5f5;
  background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.9)),
    url("/img/snc-building.jpg");
  padding: 40px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
  font-size: 18px;
}

.logo-img {
  transition: 0.1s ease-in;
  border: 10px solid #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 35vw;
}
.logo-img:hover {
  /* transform: scale(0.9); */
  transform: translate(1px, -1px) rotate(4deg);
}
@media screen and (max-width: 450px) {
  .logo-img {
    width: 45vh;
    margin-bottom: 20px;
  }
  h2 {
    text-align: center;
  }
}
</style>
