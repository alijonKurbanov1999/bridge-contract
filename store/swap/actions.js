import { swap, tokensInfo, swapIn } from "~/utils/web3";

export default {
  async tokensInfo({ commit }, userAddress) {
    console.log('begin from store')
    const tokens = await tokensInfo(userAddress);
    console.log('TOKENS: ', tokens)
    commit('TOKENS_INFO', tokens );
  },
  async Swap({ commit }, {
    userAddress, amount, recipient, symbol,
  }) {
    await swap({
      userAddress, amount, recipient, symbol,
    });
  },
  // async openSwap({ commit }, network, hash) {
  //   const url = await swapIn({ network, hash })
  //   commit('OPEN_SWAP', url)
  // }
}
