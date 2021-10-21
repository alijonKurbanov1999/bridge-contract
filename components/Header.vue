<template>
  <div class="header">
    <div class="header__logo">
      <img src="~/assets/icons/Subtract.png" alt="Crypton Academy" class="logo">
      <img src="~/assets/icons/Academy.png" alt="Academy" class="title-logo">
    </div>
    <ul class="items">
      <li class="item">
        <p class="item__ethereum">
          <img src="~/assets/icons/Vector.png" class="ethereum-icon">
          <span class="ethereum-text">Ethereum</span>
        </p>
      </li>
      <li class="item">
<!--        <button class="btn">-->
<!--          Connect wallet-->
<!--        </button>-->
        <p class="item__ethereum link">
          <span class="icon icon-text">889231...87234198</span>
          <img src="~/assets/icons/copy.png" class="copy">
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
.header {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10%;
  z-index: 20;
  width: 100vw;
  height: 82px;
  background-color: #000000;
  border-bottom: 1px solid #3C3C3C;
}
.header__logo {
  /*outline: 1px solid white;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  margin-right: 11px;
}

.items {
  /*outline: 1px solid blue;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;

}
.item {
  /*outline: 1px solid red;*/
  padding: 0;
  height: 50px;
  margin: 0;
}
.item__ethereum {
  position: relative;
  top: -16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 13px;
  margin-right: 13px;
  background: #202020;
  border: 1px solid #3C3C3C;
  border-radius: 14px;
  color: #FFFFFF;
}
.link {
  background-color: #3C3C3C;
  margin-right: 0;
}
.ethereum-text {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 15px;
  color: #FFFFFF;
}
.copy {
  margin-left: 15px;
}
</style>
