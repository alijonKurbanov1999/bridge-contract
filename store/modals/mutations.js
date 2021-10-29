export default {
  CANCEL(state, payload) {
    state.confirm = payload
  },
  CONFIRMATION(state, {sender, recepient, amount, nonce, chainFrom, symbol, v, r, s}) {
    state.dataRedeem.sender = sender;
    state.dataRedeem.recipient = recepient;
    state.dataRedeem.amount = amount;
    state.dataRedeem.nonce = nonce;
    state.dataRedeem.chainFrom = chainFrom;
    state.dataRedeem.symbol = symbol;
    state.dataRedeem.v = v;
    state.dataRedeem.r = r;
    state.dataRedeem.s = s;
    state.confirm = true;
  },
  REDEEM(state) {
    state.confirm = false;
  },
};
