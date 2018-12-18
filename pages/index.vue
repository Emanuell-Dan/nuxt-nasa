<template>
  <section class="container">
    <div class="nuxt">
      <logo/>
      <h1 class="title">
        nasa-nuxt
      </h1>
      <h2 class="subtitle">
        My flawless Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
    <nasa :nasa-gallery="nasa" />
  </section>
</template>

<script>
import {mapState} from 'vuex';
import Logo from '~/components/Logo.vue';
import Nasa from '~/components/Nasa.vue';

export default {
  components: {
    Logo,
    Nasa
  },
  head() {
    return {
      title: 'Home',
      meta: [
        { name: 'twitter:title', content: 'My flawless Nuxt.js project'},
        { name: 'twitter:description', content: 'Nuxt + NASA'}
      ]
    }
  },
  computed: {
    ...mapState(['nasa'])
  }
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
