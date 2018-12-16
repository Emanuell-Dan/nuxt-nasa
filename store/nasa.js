import Axios from "axios"

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
  async getImages(store) {
    let res = await Axios.get('https://images-api.nasa.gov/search?media_type=image&q=apollo')
    store.commit('storeImages', res.data.collection.items.slice(0, 24))
  } 
}
