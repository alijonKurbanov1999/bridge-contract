<template>
  <div>
    <div class="modal-backdrop"></div>
    <div class="modal__token">
      <div class="token__title">
        <h2>Choose token</h2>
        <img src="~/assets/img/error/close_small.png" alt="">
      </div>
      <ul class="list__tokens">
        <li class="section__tokens">
          <div class="section__inner">
            <p class="icon-background"><img src="~/assets/icons/Vector.png"></p>
            <span>ETH</span>
          </div>
          <div class="section__inner-title">
            <p class="inner-text right-side">0.0 USDT</p>
          </div>
        </li>
        <li class="section__tokens">
          <div class="section__inner">
            <p class="icon-background"><img src="~/assets/icons/Vector.png"></p>
            <span>ETH</span>
          </div>
          <div class="section__inner-title">
            <p class="inner-text">0.0 USDT</p>
          </div>
        </li>
        <li class="section__tokens">
          <div class="section__inner">
            <p class="icon-background"><img src="~/assets/icons/Vector.png"></p>
            <span>ETH</span>
          </div>
          <div class="section__inner-title">
            <p class="inner-text">0.0 USDT</p>
          </div>
        </li>
        <li class="section__tokens">
          <div class="section__inner">
            <p class="icon-background"><img src="~/assets/icons/Vector.png"></p>
            <span>ETH</span>
          </div>
          <div class="section__inner-title">
            <p class="inner-text">0.0 USDT</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseToken"
}
</script>

<style lang="scss" scoped>
.modal__token {
  position: fixed;
  top: 25%;
  left: 50%;
  @include font;
  /*font-family: Montserrat, sans-serif;*/
  /*font-style: normal;*/
  /*font-weight: 500;*/
  /*font-size: 16px;*/
  /*color: #FFFFFF;*/
  width: 546px;
  height: 448px;
  padding: 30px;
  background: #3C3C3C;
  border-radius: 14px;
  z-index: 1000;
  transform: translateX(-50%);
}

.list__tokens{
  display: flex;
  flex-direction: column;
  padding: 0;
}
.section__tokens {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: #3C3C3C;
  border: 1px solid #585858;
  box-sizing: border-box;
  border-radius: 14px;
  margin-bottom: 20px;
}
</style>
