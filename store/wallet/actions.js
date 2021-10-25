import {
  createBridge, initWallet, tokensInfo, REDEEM,
} from '~/utils/web3';

export default {
  async connectWallet({ commit }) {
    const address = await initWallet();
    console.log('Your address is: ', address);
    commit('connectWallet', address);
  },
  async tokensInfo({ commit }, userAddress) {
    const tokens = await tokensInfo(userAddress);
    commit('TOKENS_INFO', tokens);
  },
  closeModal({ commit }) {
    commit('closeModal');
  },
  setToken({ commit }, token) {
    commit('SET_TOKEN', token);
  },
  async create({ commit }, {
    userAddress, amount, recipient, symbol,
  }) {
    await createBridge({
      userAddress, amount, recipient, symbol,
    });
  },
  async redeem({ commit }, {
    userAddress, amount, recipient, symbol,
  }) {
    const redeem = await REDEEM({
      userAddress, amount, recipient, symbol,
    });
    commit('REDEEM', redeem);
  },
};
