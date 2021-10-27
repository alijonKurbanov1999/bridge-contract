import { REDEEM } from "~/utils/web3";
export default {
  async redeem({ commit }, {sender, amount, nonce, chainFrom, symbol, v, r, s}) {
    const result = await REDEEM({sender, amount, nonce, chainFrom, symbol, v, r, s})
    commit(result)
  }
}
