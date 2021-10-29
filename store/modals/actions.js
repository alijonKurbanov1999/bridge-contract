import {REDEEM} from "~/utils/web3";

export default {
  cancel({ commit } ) {
    commit('CANCEL', false)
  },
  confirmRedeem({ commit }, { sender, recepient, amount, nonce, chainFrom, symbol, v, r, s }) {
    console.log('success from store actions: ', nonce, amount, symbol)
    commit('CONFIRMATION', {sender, recepient, amount, nonce, chainFrom, symbol, v, r, s})
  },
  async redeem({ commit }, dataRedeem) {
    console.log('test from store action before', dataRedeem)
    const result = await REDEEM(dataRedeem)
    console.log('test from store action after', dataRedeem)
    commit('REDEEM', result)
  }
};
