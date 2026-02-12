<template>
  <div id="about-page">
    <Banner :title="title"/>
    <section class="bg">
     
      <AboutHistoryProfileComponent />
     
      <AboutPhilosophyCoreComponent />
      <AboutMissionVisionComponent />
      <HomeAskComponent />
    </section>

    
  </div>
</template>
<script>
export default {
  setup () {
    useHead({
      titleTemplate: 'About Us - %s',
      bodyAttrs: {
        class: 'test'
      }
    })
    //return { dynamic: ref(49) }
  },
  data() {
    return {
      title: "Who we are"
    }
  }
}
</script>
<style scoped>

</style>
