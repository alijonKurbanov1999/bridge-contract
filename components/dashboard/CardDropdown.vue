<template>
  <div class="section__lists">
    <h2>Мои обмены</h2>
    <ul class="lists">
      <li class="list list-exchange">
        <div class="exchange-icon">
          <p class="icon-background">
            <img
              src="~/assets/icons/ethereum.png"
              alt=""
              class="ethereum-icon"
            >
          </p>
          <span>ETH</span>
        </div>
        <div>
          <img
            src="~/assets/icons/coolicon.png"
            alt=""
            width="20"
            height="15"
          >
        </div>
        <div class="exchange-icon">
          <p class="icon-background">
            <img
              src="~/assets/icons/bscscan.png"
              alt=""
            >
          </p>
          <span>BSC</span>
        </div>
      </li>
      <li class="list list-user">
        <span class="list-title">Получатель</span>
        <span class="list-text">0x22eD84...Dd06F</span>
      </li>
      <li class="list list-transaction">
        <span class="list-title">Транзакция</span>
        <span class="list-text">0x22eD84...Dd06F</span>
      </li>
      <li class="list list-sum">
        <span class="list-title">Сумма</span>
        <span class="list-text">100 CFi</span>
      </li>
      <li class="list">
        <button
          class="btn btn-redeem btn-default"
          @click="$store.dispatch('wallet/redeem', {
    userAddress: 'fdsg', amount: '345', recipient: 'gs', symbol: 'SVG',
  })"
        >
          <img
            src="~/assets/icons/redeem.png"
            alt=""
            class="btn-icon"
          >Выкуп
        </button>
      </li>
      <li class="list">
        <button class="btn btn-exchange">
          <img
            src="~/assets/icons/exchange.png"
            alt=""
            class="btn-icon"
          >Обмен
        </button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'CardDropdown',
};
</script>

<style lang="scss" scoped>
.section__lists {
  @include font;
  @include white;
  width: 100%;
}
.lists {
  width: 100%;
  @include flex-row;
  flex-wrap: wrap;
  padding: 20px;
  margin-top: 25px;
  background: #3C3C3C;
  border-radius: 14px;
}
.list-title {
  line-height: 25px;
  color: #ABABAB;
}
.list-text {
  @include font;
  line-height: 20px;
  @include white;
}
.btn-icon {
  position: absolute;
  margin-left: -30px;
}
.btn-redeem {
  right: 13px;
}
.btn-exchange {
  @include background-black;
  @include white;
  border: black;
}
.list-user,
.list-transaction,
.list-sum{
  width: 170px;
  margin-left: 25px;
}
.list-sum {
  width: 100px;
}
</style>
