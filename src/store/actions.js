export default {
  login(ctx) {
    ctx.commit('setAuthState', {
      auth: true,
    });
  },
  logout(ctx) {
    ctx.commit('setAuthState', {
      auth: false,
    });
  },
};
