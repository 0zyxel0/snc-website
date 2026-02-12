<template>
  <div id="facilities-component">
    <section class="bg">
      <v-container>
        <v-row>
          <v-col>
            <h1 class="header">Facilities</h1>
            <p class="sub-header">School Laboratories and Rooms</p>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col
            v-for="n in imgList"
            :key="n"
            class="d-flex child-flex"
            cols="6"
            lg="3"
            sm="3"
          >
            <v-img
              :src="n.src"
              :lazy-src="`/img/placeholder.png`"
              aspect-ratio="4/3"
              cover
              class="bg-grey-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
        <!-- <div class="text-center mt-10 mb-7">
          <v-btn variant="outlined" rounded="0" size="large" color="green"> Load More </v-btn>
        </div> -->
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        { src: "/img/facilities/IMG_6972.jpg" },
        { src: "/img/facilities/IMG_6982.jpg" },
        { src: "/img/facilities/IMG_6999.jpg" },
        { src: "/img/facilities/IMG_7004.jpg" },
        { src: "/img/facilities/IMG_7013.jpg" },
        { src: "/img/facilities/IMG_7024.jpg" },
        { src: "/img/facilities/IMG_7029.jpg" },
        { src: "/img/facilities/IMG_7033.jpg" },
        { src: "/img/facilities/IMG_7037.jpg" },
        { src: "/img/facilities/IMG_7050.jpg" },
        { src: "/img/facilities/IMG_7066.jpg" },
        { src: "/img/facilities/IMG_7072.jpg" },
      ],
    };
  },
};
</script>
<style scoped>
.bg {
  padding: 60px 0px;
  background: #f5f5f5f5;
}
.header {
  text-align: center;
  text-transform: uppercase;
  font-size: 35px;
  color: #000000;
  /* text-decoration: underline dashed #000000 5px;
  text-underline-offset: 12px; */
  margin-bottom: 20px;
  position: relative;
  padding: 0 0 5px;
}
.header:after {
  content: "";
  background: #0aaf12;
  width: 60px;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
.sub-header {
  text-align: center;
  margin-bottom: 20px;
}
@media screen and (max-width: 450px) {
  .header {
    font-size: 30px;
  }
}
</style>
