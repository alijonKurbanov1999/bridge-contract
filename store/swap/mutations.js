export default {
  TOKENS_INFO(state, tokens) {
    state.tokens = tokens;
    state.listTokens = true;
    console.log('List tokens: ', state.listTokens)
  },
  // OPEN_SWAP(state, url) {
  //   state.urlSwap = url;
  // }
}
