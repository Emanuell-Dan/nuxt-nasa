<template>
  <div class="nasa">
    <ul class="nasa__list">
      <li
        v-for="(image, index) in nasaGallery.images"
        :key="index"
        class="nasa__list-item">
        <nuxt-link :to="`/nasa/${image.data[0].nasa_id}`">
          <img
            :src="image.links[0].href"
            class="nasa__image">
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'Nuxt.js + Nasa <3',
      meta: [
        { name: 'twitter:title', content: 'NASA gallery'},
        { name: 'twitter:description', content: 'NASA apollo images'}
      ]
    }
  },
  props: {
    nasaGallery: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.nasa {
  margin: 40px 0;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  &__list-item {
    display: flex;
    flex-basis: 20%;
    margin: 5px 5px;
    max-height: 200px;

    a {
      display: flex;
    }
  }
}
</style>
