export const state = () => ({
  msg: "Hello from store"
});

export const mutations = {
  CHANGE_MSG(s, msg) {
    s.msg = msg;
  }
};

export const actions = {};
