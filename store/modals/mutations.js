export default {
  CANCEL(state) {
    state.confirm = ''
  },
  CONFIRMATION(state, payload) {
    state.data = payload;
    state.confirm = payload.confirmType;
    console.log('CONFIRM TYPE: ', payload.confirmType)
  },
  SUCCESSFULLY(state) {
    state.confirm = ''
    state.successModal = true
  },
  ERROR(state) {
    state.confirm = ''
    state.errorModal = true
  },
  CLOSE_MODALS(state, payload) {
    state.successModal = payload
    state.errorModal = payload
  }
};
