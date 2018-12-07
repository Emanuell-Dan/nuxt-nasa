import fetch from 'node-fetch';

export const state = () => ({
  images: []
});

export const mutations = {
  storeImages(state, data) {
    state.images = [];
    state.images.push(...data);
    console.log(state.images[0]); // this logs in the terminal (store gets update server-side)
  }
}

export const actions = {
  getImages(store) {
    return fetch('https://images-api.nasa.gov/search?media_type=image&q=apollo').then(response => {
      response.json().then(function(data) {
          store.commit('storeImages', data.collection.items.slice(0, 24));
      });
    });
  }
}
