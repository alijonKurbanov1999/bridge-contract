export default {
  connectWallet(state, { userAddress, net }) {
    state.userAddress = userAddress;
    console.log('ADDRESS: ', state.userAddress);
    state.network = net;
    console.log('NETWORK: ', state.network);
  },
  REDEEM(state) {
    console.log(state.balance);
  },
};
