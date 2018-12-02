<template>
  <section class="nasa__route">
    <div
      v-if="getImage"
      class="nasa__image-wrapper">
      <img
        :src="getImage.links[0].href"
        class="nasa__image">
      <div class="nasa__content">
        <h2 class="nasa__image-title">{{ getImage.data[0].title }}</h2>
        <p class="nasa__image-date"><strong>Shot taken on:</strong> {{ getImage.data[0].date_created }}</p>
        <p class="nasa__image-description"><strong>About:</strong> {{ getImage.data[0].description || getImage.data[0].description_508 }}</p>
        <p class="nasa__image-keywords"><strong>Keywords:</strong></p>
        <ul>
          <li
            v-for="keyword in getImage.data[0].keywords"
            :key="keyword.id"
            class="nasa__image-keyword">
            {{ keyword }}
          </li>
        </ul>
      </div>
    </div>
    <aside class="nasa__related">
      <h3 class="nasa__related-title">Find out more</h3>
      <ul class="nasa__related-list">
        <li
          v-for="related in relatedImages"
          :key="related.id"
          class="nasa__related-item">
          <nuxt-link :to="`/nasa/${related.data[0].nasa_id}`">{{ related.data[0].title }}</nuxt-link>
        </li>
      </ul>
    </aside>
  </section>
</template>

<script>
import fetch from 'node-fetch';

const URL = 'https://images-api.nasa.gov/search?media_type=image&q=apollo';

export default {
  head() {
    return {
      title: this.getImage.data[0].title,
      meta: [
        { name: 'twitter:title', content: ''},
        { name: 'twitter:description', content: ''},
        { name: 'twitter:image', content: ''}
      ]
    }
  },
  data() {
    return {
      id: this.$route.params.image,
      images: []
    };
  },
  computed: {
    getImage() {
      return this.images.find(image => image.data[0].nasa_id === this.id);
    },
    relatedImages() {
      return this.images.filter(image => image.data[0].nasa_id !== this.id);
    }
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
  &__route {
    display: flex;
    flex-direction: column;
  }

  &__image-wrapper {
    display: flex;
    list-style: none;
  }

  &__content {
    padding: 20px;
  }

  &__image-title {
    text-align: center;
  }

  &__image-date {
    padding: 40px 0 20px;
  }

  &__image-keywords {
    padding: 20px 0 0;
  }

  &__image-keyword {
    padding-top: 10px;
  }

  &__content,
  &__image {
    flex-basis: 50%;
  }

  &__related {
    margin: 40px 0;
  }

  &__related-title {
    text-align: center;
    margin-bottom: 20px;
  }

  &__related-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  &__related-item {
    flex-basis: 25%;
    padding: 10px;

    a {
      color: inherit;
    }
  }
}
</style>
