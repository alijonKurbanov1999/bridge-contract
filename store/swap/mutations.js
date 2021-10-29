export default {
  TOKENS_INFO(state, tokens) {
    state.tokens = tokens;
    console.log('test: ', state.modalTokens)
    state.modalTokens = true;
    console.log('test: ', state.modalTokens)
  },
  closeModal(state, payload) {
    state.modalTokens = payload;
  },
}
