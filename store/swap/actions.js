import { swap, tokensInfo, swapIn } from "~/utils/web3";

export default {
  async tokensInfo({ commit }, userAddress) {
    const tokens = await tokensInfo(userAddress);
    console.log('TOKENS: ', tokens)
    commit('TOKENS_INFO', tokens);
  },
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  closeModal({ commit }, payload) {
    commit('closeModal', payload);
  },
  async Swap({ commit }, { userAddress, amount, recipient, symbol }) {
    console.log('test swap 2')
    const swap = await swap({
      userAddress, amount, recipient, symbol,
    });
    commit(swap)
  },
}
