import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import products from './products/index.js';
import cart from './cart/index.js';

const store = createStore({
  state() {
    return {
      authenticated: false,
    };
  },
  modules: {
    products,
    cart,
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
