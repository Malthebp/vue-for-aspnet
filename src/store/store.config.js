import createPersistedState from "vuex-persistedstate";

export default {
  plugins: [new createPersistedState()],
  strict: false
};
