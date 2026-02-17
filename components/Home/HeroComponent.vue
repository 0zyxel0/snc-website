<template>
  <div id="home-hero-component">
    <section class="bg">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <v-img src="img/snc-logo-updated.png" class="mx-auto hero-logo"></v-img>
              <h2 class="welcome-text">Welcome to</h2>
              <h1 class="title-text">St. Nicolas College</h1>
              <p class="moto-text">
                Advancing Your Knowledge and Skills for Global Competitiveness
              </p>
              <v-btn
                class="mt-8"
                size="x-large"
                to="/about-us"
                rounded
                >Learn More</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
    </section>
        <v-row no-gutters>
          <v-col cols="3" md="3"><v-card class="mx-auto" height="30" color="#F44336" rounded="0" elevation="0"> </v-card></v-col>
      <v-col cols="3" md="3"><v-card class="mx-auto" height="30" color="#8BC34A" rounded="0" elevation="0"> </v-card></v-col>
      <v-col cols="3" md="3"><v-card class="mx-auto" height="30" color="#FFEB3B" rounded="0" elevation="0"> </v-card></v-col>
      <v-col cols="3" md="3"><v-card class="mx-auto" height="30" color="#2196F3" rounded="0" elevation="0"> </v-card></v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Hero Component",
  data() {
    return {
      overlay: true,
    };
  },
};
</script>
<style scoped>
.bg {
  background: #f5f5f5f5;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(13, 104, 1, 0.8)),
    url("/img/snc-building-front.jpg");
  padding: 30px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;
  height: 95vh;

  
}
.hero-logo {
  margin: 40px 0px;
  width: 17vh;
  /* animation: bounce2 3s ease infinite; */
  backface-visibility: visible !important;
	animation: flip 4s ease infinite;
}
@keyframes bounce2 {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}
@keyframes flip {
	0% {
		transform: perspective(400px) rotateY(0);
		animation-timing-function: ease-out;
	}
	40% {
		transform: perspective(400px) translateZ(0) rotateY(170deg);
		animation-timing-function: ease-out;
	}
	50% {
		transform: perspective(400px) translateZ(0) rotateY(190deg) scale(1);
		animation-timing-function: ease-in;
	}
	80% {
		transform: perspective(400px) rotateY(360deg) scale(.95);
		animation-timing-function: ease-in;
	}
	100% {
		transform: perspective(400px) scale(1);
		animation-timing-function: ease-in;
	}
}

.welcome-text {
  font-size: 5vh;
  text-transform: uppercase;
  color: white;
}

.title-text {
  font-size: 8vh;

  margin-top: 5px;
  text-transform: uppercase;
  color: green;
  animation: neon 2s ease infinite;
}

.moto-text {
  font-size: 3.5vh;
  font-style: italic;
  color: white;
  /* text-shadow: 2px 2px #000000; */
}
@keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
@-webkit-keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
.rotating
    {
    -webkit-animation: rotating 5s linear infinite;
    -moz-animation: rotating 5s linear infinite;
    -ms-animation: rotating 5s linear infinite;
    -o-animation: rotating 5s linear infinite;
    animation: rotating 5s linear infinite;
    }
@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 10px #0bca25a8, 0 0 20px #0bca25a8, 0 0 20px #0bca25a8,
      0 0 20px #0bca25a8, 0 0 2px #fed128, 2px 2px 2px #11e22da8;
    color: #ffffff;
  }
  /* 80% {
    text-shadow: 0 0 2px #11e22da8, 0 0 5px #11e22da8, 0 0 5px #11e22da8,
      0 0 5px #11e22da8, 0 0 2px #11e22da8, 4px 4px 2px #11e22da8;
    color: white;
  }
  50% {
    text-shadow: 0 0 2px #0a9c1ea8, 0 0 5px #0a9c1ea8, 0 0 5px #0a9c1ea8,
      0 0 5px #0a9c1ea8, 0 0 2px #0a9c1ea8, 4px 4px 2px #11e22da8;
    color: white;
  } */
}

@media screen and (max-width: 450px) {
  .welcome-text {
    font-size: 3.5vh;
  }
  .title-text {
    font-size: 4vh;
    padding: 10px 0;
  }
  .moto-text {
    font-size: 2.5vh;
  }
  .hero-logo {
    width: 15vh;
  }
}
</style>
