export default {
  connectWallet(state, { userAddress, net }) {
    state.userAddress = userAddress;
    console.log('ADDRESS: ', state.userAddress);
    state.network = net;
    console.log('NETWORK: ', state.network);
  },
  TOKENS_INFO(state, tokens) {
    state.tokens = tokens;
    state.tokensShow = true;
  },
  closeModal(state) {
    state.tokensShow = false;
  },
  SET_TOKEN(state, t) {
    state.balance = t.balance;
    state.symbol = t.symbol;
  },
  REDEEM(state) {
    console.log(state.balance);
  },
};
