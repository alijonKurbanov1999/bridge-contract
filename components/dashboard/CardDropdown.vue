<template>
  <div class="section__lists">
    <h2>Мои обмены</h2>
    <ul class="lists">
      <li class="list list-exchange">
        <div class="exchange-icon">
          <p class="icon-background"><img src="~/assets/icons/Vector.png" alt=""></p>
          <span>ETH</span>
        </div>
        <div>
          <img src="~/assets/icons/coolicon.png" alt="" width="20" height="15">
        </div>
        <div class="exchange-icon">
          <p class="icon-background"><img src="~/assets/icons/gold.png" alt=""></p>
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
        <button class="btn btn-redeem btn-default"><img src="~/assets/icons/redeem.png" alt="" class="btn-icon">Выкуп</button>
      </li>
      <li class="list">
        <button class="btn btn-exchange"><img src="~/assets/icons/exchange.png" alt="" class="btn-icon">Обмен</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CardDropdown"
}
</script>

<style lang="scss" scoped>
.lists {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  background: #3C3C3C;
  border-radius: 14px;
}
.list-title {
  line-height: 25px;
  color: #ABABAB;
}
.list-text {
  @include font;
  /*font-family: Montserrat, sans-serif;*/
  /*font-style: normal;*/
  /*font-weight: 600;*/
  /*font-size: 16px;*/
  line-height: 20px;
  color: #FFFFFF;
}
.btn-icon {
  position: absolute;
  margin-left: -30px;
}
.btn-exchange {
  background: black;
  color: #FFFFFF;
  border: black;
}
.list-user,
.list-transaction,
.list-sum{
  width: 150px;
  margin-left: 20px;
}
</style>
