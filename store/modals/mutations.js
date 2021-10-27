export default {
  closeModal(state, payload) {
    state.listTokens = payload;
  },
  SET_TOKEN(state, t) {
    state.balance = t.balance;
    console.log('Balance: ', state.balance)
    state.symbol = t.symbol;
    console.log('Symbol: ', state.symbol)
  },
};
