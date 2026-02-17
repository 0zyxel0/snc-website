<template>
  <div id="about-history-profile">
    <section class="bg">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" xl="5" md="8" sm="7">
            <h1 class="title">History and Profile of St. Nicolas College</h1>
            <p>
              The idea of putting up an academic center of business and
              technology came to fore through the initiative of two individuals
              whose vision of providing specialized training and accessible
              employment to students is clear and attainable. These are Ms.
              Vilma B. Caluag, an entrepreneur of worth, who sits at the helm of
              Mel-Vi Group of Companies, and Mr. Gregorio M. Sison, Jr., an
              educator and academic consultant, whose skills in the scholastic
              world have been inspiring and far-reaching.
            </p>
            <p>
              St. Nicolas College of Business and Technology, strategically
              located at the Mel-Vi Bldg., Jose Abad Santos Avenue (formerly
              Olongapo-Gapan Rd.), Brgy.Dolores, City of San Fernando, Pampanga
              was founded in 2004. One of its noble missions is the pursuit of
              global competitiveness and the establishment of a school that
              would address the current demands of industries, thus
              consequentially benefiting the business sectors and the labor
              force.
            </p>
          </v-col>
          <v-col cols="12" xl="4" md="4" sm="5">
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
<style scoped>
.bg {
    padding: 50px 0;
}
h1 {
    text-transform: uppercase;
    font-size: 25px;
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
}
.logo-img:hover {
  transform: scale(0.9);
}
@media screen and (max-width: 450px) {
.title {
    text-align: center;
}
}
</style>
