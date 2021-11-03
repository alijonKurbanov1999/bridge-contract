<template>
  <header class="header">
    <nav class="header__navigation">
      <div class="header__logo">
        <img
          src="~/assets/icons/Subtract.png"
          alt="Crypton Academy"
          class="header__logo-image"
        >
        <img
          src="~/assets/icons/Academy.png"
          alt="Academy"
        >
      </div>
      <ul class="header__menu">
        <li class="header__item">
          <p class="header__item-address">
            <img
              :src="require(`~/assets/icons/${network}.png`)"
              class="header__item-icon"
            >
            <span class="header__item-title">{{ NETWORK }}</span>
          </p>
        </li>
        <li class="header__item">
          <p
            v-if="userAddress"
            class="header__item-address header__item_background"
          >
            {{ address }}
            <img
              src="~/assets/icons/copy.png"
              class="header_copyright"
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
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      userAddress: 'wallet/userAddress',
      network: 'wallet/network',
    }),
    address() {
      return this.userAddress.slice(0, 8).concat('...') + this.userAddress.slice(-5);
    },
    NETWORK() {
      return this.network === 'ethereum'? 'Ethereum': 'BscScan';
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
  &__navigation {
    @include flex-row;
    height: 100%;
    margin: auto 15%;
    position: relative;
  }
  @include background-black;
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 82px;
  border-bottom: 1px solid #3C3C3C;
  &__logo {
    @include flex-row;
    &-image {
      margin-right: 11px;
    }
  }
  &__menu {
    @include flex-row;
    margin: 0;
    padding: 0;
  }
  &__item {
    padding: 0;
    height: 50px;
    margin: 0;
    &_background {
      background-color: #3C3C3C;
    }
    &-title {
      letter-spacing: 1px;
      margin-left: 15px;
    }
    &-address {
      @include flex-row;
      position: relative;
      @include white;
      @include background-black;
      height: 50px;
      padding: 13px;
      margin-right: 13px;
      border: 1px solid #3C3C3C;
      border-radius: 14px;
    }
  }
  &_copyright {
    margin-left: 15px;
    cursor: pointer;
  }
}
</style>
