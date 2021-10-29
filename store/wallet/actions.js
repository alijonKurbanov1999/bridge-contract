import { initWallet } from '~/utils/web3';

export default {
  async connectWallet({ commit }) {
    const address = await initWallet();
    console.log('Your address is: ', address);
    commit('connectWallet', address);
  },
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },
};
