<template>
    <div>
        <Banner :title="title"/>
        <section class="bg">
            <ContactDetailsComponent />
            <ContactFormMapComponent />
        </section>
    </div>
</template>
<script>
export default {
  setup () {
    useHead({
      titleTemplate: 'Contact Us - %s',
      bodyAttrs: {
        class: 'test'
      }
    })
    //return { dynamic: ref(49) }
  },
  data() {
    return {
      title: "Get in Touch with Us"
    }
  }
}
</script>
<style scoped>
.bg {
    background: #f7f7f7;
 
}
</style>