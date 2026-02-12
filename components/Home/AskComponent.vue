<template>
  <div id="ask-component">
    <section class="bg">
        <v-container>
      <!-- <h1>Have a question?</h1> -->
      <v-row align="center">
        <v-col cols="12" lg="1"></v-col>
        <v-col cols="12" lg="1" md="2" sm="2" class="icon"
          >
         <v-icon
            icon="mdi:mdi-phone"
            size="90"
            color="success"
          ></v-icon>
          <!-- <v-btn size="90" variant="outlined" rounded="lg" icon="mdi:mdi-phone"><v-icon
            icon="mdi:mdi-phone"
            size="90"
            color="success"
          ></v-icon></v-btn> -->
        </v-col>
        <v-col cols="12" lg="7" md="6" sm="6"
          ><h1>Have a question?</h1>
          <p>
            For inquiries and reservations, visit us at Mel-Vi Bldg., Jose Abad
            Santos Avenue, Dolores, City of San Fernando, Pampanga.
          </p>
          <p>Tel. No.: (045) 402-6108 / (045) 402-6109</p></v-col
        >
        <v-col cols="12" lg="3" md="3" sm="3">
          <v-img src="/img/contact.png" :width="277" cover></v-img>
        </v-col>
      </v-row>
    </v-container>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

h1 {
    margin-bottom: 20px;
    position: relative;
    padding: 0 10px 5px;
    font-size: 20px;
}
h1:after {
    content: "";
  background: #0aaf12;
  width: 60px;
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 6.3%;
  transform: translate(-50%);
}
p {
    padding: 0px 10px;
    font-size: 18px;
    
}
.icon {
    text-align: center;

}

@media screen and (max-width: 450px) {
    h1 {
        text-align: center;
        padding: 0 0 5px;
    }
    h1:after {
    content: "";
  background: #0aaf12;
  width: 60px;
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
    p {
        text-align: center;
        padding: 0;
    }
}

</style>
