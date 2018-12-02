<template>
  <div class="nasa">
    <ul class="nasa__list">
      <li
        v-for="image in images"
        :key="image.data[0].nasa_id"
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
import fetch from 'node-fetch';

const URL = 'https://images-api.nasa.gov/search?media_type=image&q=apollo';

export default {
  head() {
    return {
      title: 'Nasa',
      meta: [
        { name: 'twitter:title', content: 'NASA gallery'},
        { name: 'twitter:description', content: 'NASA apollo images'}
      ]
    }
  },
  data() {
    return {
      images: []
    };
  },
  mounted() {
    const vm = this;

    fetch(URL).then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json().then(function(data) {
          vm.images = data.collection.items.slice(0, 24);
        });
      }
    ).catch(function(err) {
      console.log('Fetch Error', err);
    });
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
