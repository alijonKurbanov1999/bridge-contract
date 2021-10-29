export default {
  connectWallet(state, { userAddress, net }) {
    state.userAddress = userAddress;
    console.log('ADDRESS: ', state.userAddress);
    state.network = net;
    console.log('NETWORK: ', state.network);
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
};
