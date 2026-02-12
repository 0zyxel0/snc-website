<template>
  <div id="courses">
    <Banner :title="title"/>
    <section class="bg">
      <CoursesCollegeComponent />
      <CoursesSeniorHighComponent />
      <HomeAskComponent />
    </section>
  </div>
</template>
<script>
export default {
  setup () {
    useHead({
      titleTemplate: 'Courses - %s',
      bodyAttrs: {
        class: 'test'
      }
    })
    //return { dynamic: ref(49) }
  },
  data() {
    return {
      title: "Courses"
    }
  }
}
</script>
<style scoped>
/* .hero-header {
    height: 400px;
    width: 100%;
    text-align: center;
    padding-top: 100px;
    color: white;
    overflow: hidden;
    background: #C04848;
    background: linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg");  
    background: linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg"); 
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
} */
</style>
