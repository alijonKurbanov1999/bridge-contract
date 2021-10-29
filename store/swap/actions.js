import {SWAP, tokensInfo} from "~/utils/web3";

export default {
  async tokensInfo({ commit }, userAddress) {
    const tokens = await tokensInfo(userAddress);
    console.log('TOKENS: ', tokens)
    commit('TOKENS_INFO', tokens);
  },
  closeModal({ commit }, payload) {
    commit('closeModal', payload);
  },
  async Swap({ commit }, { userAddress, amount, recipient, symbol }) {
    console.log('test swap 2')
    const swap = await SWAP({
      userAddress, amount, recipient, symbol,
    });
    commit(swap)
  },
}
