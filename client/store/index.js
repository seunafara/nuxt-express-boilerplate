export const getters = {
  authenticated(state) {
    return state.auth.loggedIn;
  },
  user(state) {
    return state.auth.user;
  }
};

export const state = () => ({
  busy: false,
  loggedIn: false,
  strategy: "local",
  user: false
});
