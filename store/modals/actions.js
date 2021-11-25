import { REDEEM, SWAP } from "~/utils/web3";

export default {
  cancel({ commit } ) {
    commit('CANCEL')
  },
  confirmation({ commit }, payload) {
    console.log('success from store actions: ', payload)
    commit('CONFIRMATION', payload)
  },
  async submitData({ commit }, data) {
    if (data.confirmType === 'swap') {
      console.log('Submit confirm is: ', data.confirmType)
      try {
        const result = await SWAP(data)
        commit('SUCCESSFULLY', result)
      } catch (err) {
        console.error('Error of Swap: ', err);
        commit('ERROR')
      }
    } else if(data.confirmType === 'redeem') {
      console.log('Submit confirm is:', data.confirmType)
      try {
        const result = await REDEEM(data)
        commit('SUCCESSFULLY', result)
      } catch (err) {
        console.error('Error of Redeem: ', err);
        commit('ERROR')
      }
    }
    console.log('Success!!!');
  },
  closeModals({commit}, payload) {
    commit('CLOSE_MODALS', payload)
  }

};
