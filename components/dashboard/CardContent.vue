<template>
  <div class="section__bottom">
    <h2 class="inner-title">Кроссчейн обмен</h2>
    <form action="#">
      <div>
        <label for="name">Введите адрес получателя</label>
        <input type="text" id="name" placeholder="Placeholder">
      </div>
      <label for="sum">Сумма перевода</label>
      <div class="row">
        <div class="row__left">
          <span class="row-max">MAX</span>
          <input type="text" id="sum" placeholder="Placeholder" class="input-inner">
          <div class="select-inner">
            <p>Choose token</p>
            <img src="~/assets/icons/down.png" alt="">
          </div>
          <!--            <select class="select-inner">
                        <option selected disabled>Choose token</option>
                        <option value="BSC">
                          <p class="icon-background"><img src="~/assets/icons/gold.png" alt=""></p>
                          <span>BSC</span>
                        </option>
                      </select>-->
        </div>
        <div class="row__right">
          <div class="row-background">
            <p class="icon-background"><img src="~/assets/icons/Vector.png"></p>
            <span>от ETH</span>
          </div>
          <img src="../../assets/icons/equal.png" class="equal">
          <div class="row-background gold">
            <p class="icon-background"><img src="~/assets/icons/gold.png" alt=""></p>
            <span>Куда BSC</span>
          </div>
        </div>
      </div>
      <button class="btn btn-create">Создать обмен</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CardContent"
}
</script>

<style lang="scss" scoped>
.section__bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background: #3C3C3C;
  border-radius: 14px;
  margin-top: 25px;
}
.inner-title {
  @include font;
  /*font-family: Montserrat, sans-serif;*/
  /*font-style: normal;*/
  font-weight: 600;
  font-size: 26px;
  line-height: 28px;
  color: #FFFFFF;
}
.row {
  display: grid;
  grid-template-columns: 4fr 1fr;
}
.row__left{
  display: inline-block;
}
.input-inner {
  padding-left: 83px;
}
.row-max {
  position: absolute;
  width: 58px;
  height: 52px;
  display: flex;
  flex-direction: row;
  @include font;
  /*font-style: normal;*/
  /*font-weight: 500;*/
  /*font-size: 16px;*/
  color: #09F2C3;
  align-items: center;
  padding: 11px 10px;
  background: #747474;
  border-radius: 10px;
  margin: 10px;
}
.select-inner {
  position: relative;
  margin-top: -93px;
  margin-left: 82%;
  width: 166px;
  height: 52px;
  outline: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 11px 10px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 18px;
  background: #747474;
  border-radius: 10px;
  resize: none;
  cursor: pointer;

}
.row__right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
}
.row-background {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 119px;
  height: 72px;
  background: #202020;
  border-radius: 16px;
  color: #FFFFFF;
}
.equal {
  margin: auto 15px;
}
.gold {
  background: #FFC500;
}
.btn-create {
  margin-top: 30px;
  height: 50px;
}
</style>
