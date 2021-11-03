export default {
  CANCEL(state, payload) {
    state.confirm = payload
  },
  CONFIRMATION(state, payload) {
    state.Data = payload;
    state.confirm = true;
  },
};
