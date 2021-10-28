export default {
  closeModal({ commit }) {
    commit('closeModal');
  },
  setToken({ commit }, token) {
    console.log('fourth');
    commit('SET_TOKEN', token);
    console.log('fifth');
  },
};
