export default {
  setAuthState(state, payload) {
    state.authenticated = payload.auth;
  },
};
