import {REDEEM, SWAP} from "~/utils/web3";

export default {
  cancel({ commit } ) {
    commit('CANCEL', false)
  },
  confirmRedeem({ commit }, payload) {
    console.log('success from store actions: ', payload)
    commit('CONFIRMATION', payload)
  },
  async redeem({ commit }, data) {
    const result = await REDEEM(data)
    console.log('Success!!!!');
    commit(result)
  },
  async Swap({ commit }, payload) {
    console.log('test swap 2')
    const swap = await SWAP(payload);
    commit(swap)
  },
};
