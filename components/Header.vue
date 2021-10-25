<template>
  <div class="header">
    <nav class="navigation">
      <div class="header__logo">
        <img
          src="~/assets/icons/Subtract.png"
          alt="Crypton Academy"
          class="logo"
        >
        <img
          src="~/assets/icons/Academy.png"
          alt="Academy"
          class="title-logo"
        >
      </div>
      <ul class="items">
        <li class="item">
          <p class="item__ethereum">
            <img
              :src="require(`~/assets/icons/${network}.png`)"
              class="ethereum-icon"
            >
            <span class="ethereum-text">{{ network === 'ethereum'? 'Ethereum': 'BscScan' }}</span>
          </p>
        </li>
        <li class="item">
          <p
            v-if="userAddress"
            class="item__ethereum link"
          >
            <span class="icon icon-text">{{ address }}</span>
            <img
              src="~/assets/icons/copy.png"
              class="copy"
              @click="copy"
            >
          </p>
          <button
            v-else
            class="btn"
            @click="connect"
          >
            Connect wallet
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  // data() {
  //   return {
  //     copied: false,
  //   };
  // },
  computed: {
    ...mapGetters({
      userAddress: 'wallet/userAddress',
      network: 'wallet/network',
    }),
    address() {
      return this.userAddress.slice(0, 8).concat('...') + this.userAddress.slice(-5);
    },
  },
  methods: {
    connect() {
      this.$store.dispatch('wallet/connectWallet', this.userAddress);
    },
    copy() {
      navigator.clipboard.writeText(this.userAddress);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 82px;
  background-color: #000000;
  border-bottom: 1px solid #3C3C3C;
}
.navigation {
  height: 100%;
  margin: auto 15%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  margin-right: 11px;
}

.items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
}
.item {
  padding: 0;
  height: 50px;
  margin: 0;
}
.item__ethereum {
  position: relative;
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
  @include font;
  /*font-family: Montserrat, sans-serif;*/
  /*font-style: normal;*/
  /*font-weight: normal;*/
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
