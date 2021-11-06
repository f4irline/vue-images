import api from "../../api/imgur";

const state = {
  token: undefined,
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const mutations = {
  setToken: (state, token) => state.token = token,
};

const actions = {
  login: () => api.login(),
  logout: ({ commit }) => commit('setToken', undefined),
};

export default {
  state,
  getters,
  mutations,
  actions,
};