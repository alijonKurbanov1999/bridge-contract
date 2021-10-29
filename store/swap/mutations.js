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
  SET_TOKEN(state, t) {
    console.log('STATE:::', state)
    console.log('t:::', t)
    state.balance = t.balance;
    console.log('Balance: ', state.balance)
    console.log('Balance: ', t.balance)
    state.symbol = t.symbol;
    console.log('Symbol: ', state.symbol)
  },
  // OPEN_SWAP(state, url) {
  //   state.urlSwap = url;
  // }
}
