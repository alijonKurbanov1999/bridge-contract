import { REDEEM } from "~/utils/web3";

export default {
  cancel({ commit } ) {
    commit('CANCEL', false)
  },
  confirmRedeem({ commit }, { sender, recepient, amount, nonce, chainFrom, symbol, v, r, s }) {
    console.log('success from store actions: ', nonce, amount, symbol)
    commit('CONFIRMATION', {sender, recepient, amount, nonce, chainFrom, symbol, v, r, s})
  },
  async redeem({ commit }, dataRedeem) {
    const result = await REDEEM(dataRedeem)
    commit(result)
  }
};
