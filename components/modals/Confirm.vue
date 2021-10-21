<template>
  <div>
    <div class="modal-backdrop"></div>
    <div class="modal__confirm">
      <div class="token__title">
        <h2>Подтверждение обмена</h2>
        <img src="~/assets/img/error/close_small.png" alt="">
      </div>
      <div class="token__data">
        <span>Адрес отправителя</span>
        <span class="clr-grey">0x2bx1eat5jckfv9640lqejqcek4xtcq4xtcq92</span>
      </div>
      <div class="token__data">
        <span>Адрес получателя</span>
        <span class="clr-grey">0x2bx1eat5jckfv9640lqejqcek4xtcq4xtcq92</span>
      </div>
      <div class="token__data">
        <span>Токен</span>
        <span class="clr-grey">0.0 USDT</span>
      </div>
      <div class="token__exchange">
        <div class="token__data">
          <span>Сумма переводов</span>
          <span class="clr-grey">USDT</span>
        </div>
        <div class="exchange-items">
          <div class="exchange-icon">
            <p class="icon-background"><img src="~/assets/icons/Vector.png" alt=""></p>
            <span class="clr-grey">ETH</span>
          </div>
          <div>
            <img src="~/assets/icons/coolicon.png" alt="" width="20" height="15">
          </div>
          <div class="exchange-icon">
            <p class="icon-background"><img src="~/assets/icons/gold.png" alt=""></p>
            <span class="clr-grey">BSC</span>
          </div>
        </div>
      </div>
      <div class="token__data">
        <span>Комиссия</span>
        <span class="clr-grey">111</span>
      </div>
      <div class="btn-box">
        <button class="btn btn-default mr-20">Отменить</button>
        <button class="btn btn-ocean">Подтвердить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Confirm"
}
</script>

<style scoped>
.modal__confirm {
  position: fixed;
  top: 25%;
  left: 50%;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 711px;
  height: 638px;
  background: #3C3C3C;
  border-radius: 14px;
  z-index: 1000;
  transform: translateX(-50%);
}
.token__data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
  position: static;
  height: 60px;
  background: #3C3C3C;
  border: 1px solid #585858;
  box-sizing: border-box;
  border-radius: 14px;
}
.token__exchange {
  position: relative;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
}
.exchange-items {
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0 auto 20px;
}
.btn-box {
  width: 100%;
  height: 50px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.mr-20 {
  margin-right: 20px;
}
.clr-grey {
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1px;
  color: #C7C7C7;

}
</style>
