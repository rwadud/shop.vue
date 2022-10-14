export default {
  namespaced: true,
  state() {
    return {
      items: new Map(),
      total: 0.0,
      qty: 0,
    };
  },
  mutations: {
    addItemToCard(state, payload) {
      const id = payload.item.id;
      let item = state.items.get(id);
      if (item === undefined) {
        item = payload.item;
        state.items.set(id, item);
      } else {
        item.qty += payload.item.qty;
        state.items.set(id, item);
      }
    },
    removeItemFromCart(state, payload) {
      const item = state.items.get(payload.itemId);
      console.log(item);
      state.qty -= item.qty;
      state.total -= item.qty * item.price;
      state.items.delete(payload.itemId);
    },
    updateQty(state) {
      state.qty = [...state.items].reduce((acc, [_, item]) => {
        return acc + item.qty;
      }, 0);
    },
    updateTotal(state) {
      state.total = Array.from(state.items).reduce((acc, [_, item]) => {
        return acc + item.qty * item.price;
      }, 0.0);
    },
  },
  actions: {
    addItemToCard(ctx, payload) {
      ctx.commit('addItemToCard', payload);
      ctx.commit('updateQty', payload);
      ctx.commit('updateTotal', payload);
    },
    removeItemFromCart(ctx, payload) {
      ctx.commit('removeItemFromCart', payload);
      ctx.commit('updateQty', payload);
      ctx.commit('updateTotal', payload);
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getTotal(state) {
      return state.total;
    },
    getQty(state) {
      return state.qty;
    },
    getCart(state) {
      return {
        items: [...state.items].map(([_, item]) => item),
        total: state.total,
        qty: state.qty,
      };
    },
  },
};
