import { initWallet, REDEEM, } from '~/utils/web3';

export default {
  async connectWallet({ commit }) {
    const address = await initWallet();
    console.log('Your address is: ', address);
    commit('connectWallet', address);
  },
  async redeem({ commit }, {
    userAddress, amount, recipient, symbol,
  }) {
    console.log('man here')
    const redeem = await REDEEM({
      userAddress, amount, recipient, symbol,
    });
    commit('REDEEM', redeem);
  },
};
