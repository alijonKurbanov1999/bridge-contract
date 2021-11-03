<template>
  <div class="card">
    <div v-if="!userAddress" class="modal__drop front-drop" title="Контент будет доступен после подключения кошелька!!"></div>
    <h2 class="card__title">
      Кроссчейн обмен
    </h2>
    <div class="exchange-form">
      <label for="name">Введите адрес получателя</label>
      <input
        id="name"
        type="text"
        placeholder="Placeholder"
        class="card__input"
        v-model="recipient">
      <label for="sum">Сумма перевода</label>
      <div class="card__row">
        <div class="card__row-left">
            <button class="card__maxAmount" @click="maxNumber">MAX</button>
              <input
              id="sum" type="number"
              placeholder="Placeholder"
              class="card__input card__input_size"
              v-model="amount"
            >
            <div
              class="card__select"
              @click="chooseToken"
            >
              <div v-if="symbol" class="card__select_row">
                <p class="icon_background">
                  <img
                    :src=" require(`~/assets/icons/${network}.png`)"
                    class="ethereum-icon"
                  >
                </p>
                {{ symbol }}
              </div>
              <p v-else class="card__select_margin">Choose token</p>
              <img
                src="~/assets/icons/down.png"
                alt=""
              >
          </div>
        </div>
        <div class="card__row-right">
        <div class="card__row_background" :class="network == 'bscscan' ? 'gold' : ''">
          <p class="icon_background">
            <img
              :src=" require(`~/assets/icons/${IMG_NET_FROM}.png`)"
              class="ethereum-icon"
            >
          </p>
          <span>от {{ NET_FROM }}</span>
        </div>
        <img
          src="../../assets/icons/equal.png"
          class="card__row_equal"
        >
        <div class="card__row_background" :class="network == 'bscscan' ? '' : 'gold'">
          <p class="icon_background">
            <img
              :src=" require(`~/assets/icons/${IMG_NET_TO}.png`)"
              alt=""
            >
          </p>
          <span>Куда {{ NET_TO }}</span>
        </div>
      </div>
      </div>
      <button class="btn card__btn-swap" @click.prevent="Swap">
        Создать обмен
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CardContent',
  data() {
    return {
      amount: null,
      recipient: '',
    };
  },
  computed: {
    ...mapGetters({
      userAddress: 'wallet/userAddress',
      symbol: 'wallet/symbol',
      balance: 'wallet/balance',
      network: 'wallet/network',
    }),
    NET_FROM() {
      return this.network === 'ethereum' ? 'ETH' : 'BSC';
    },
    NET_TO() {
      return this.network === 'ethereum' ? 'BSC' : 'ETH';
    },
    IMG_NET_FROM() {
      return this.network === 'ethereum' ? 'ethereum' : 'bscscan';
    },
    IMG_NET_TO() {
      return this.network === 'ethereum' ? 'bscscan' : 'ethereum'
    }
  },
  methods: {
    chooseToken() {
      this.$store.dispatch('swap/tokensInfo',  this.userAddress, {root: true});
    },
    maxNumber() {
      this.amount = this.balance;
      console.log('max amount: ', this.amount);
    },
    Swap() {
      console.log('start!')
      console.log('UserAddress: ', this.userAddress);
      this.$store.dispatch('modals/Swap',{
        sender: this.userAddress,
        amount: this.amount,
        recipient: this.recipient,
        symbol: this.symbol,
      });
    },
   },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background: #3C3C3C;
  border-radius: 14px;
  margin: 25px 0;
  &__title {
    @include font;
    @include white;
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 30px;
  }
  &__input {
    margin: 0 0 0 0;
    outline: none;
    display: block;
    width: 100%;
    height: 72px;
    padding: 0.5rem 1.5rem;
    color: #8F8F8F;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: 1px;
    background: #585858;
    border: 1px solid #585858;
    box-sizing: border-box;
    border-radius: 14px;
    resize: none;
    &_size {
      height: 52px;
      max-width: 550px;
    }
  }
  &__row {
    display: grid;
    grid-template-columns: 4fr 1fr;
    margin: 0;
    &-left {
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 10px;
      background: #585858;
      border: 1px solid #585858;
      box-sizing: border-box;
      border-radius: 14px;
    }
    &-right {
      @include flex-row;
      margin-left: 25px;
    }
    &_background {
      @include flex-row;
      @include white;
      @include background-black;
      padding: 20px;
      width: 119px;
      height: 72px;
      border-radius: 16px;
      cursor: pointer;
    }
    &_equal {
      margin: auto 15px;
      cursor: pointer;
    }
  }
  &__maxAmount {
    width: 58px;
    height: 52px;
    @include flex-row;
    @include font;
    color: #09F2C3;
    padding: 11px 10px;
    border: none;
    outline: none;
    background: #747474;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 10px;
  }
  &__select {
    @include flex-row;
    width: 165px;
    height: 52px;
    outline: none;
    padding: 11px 10px;
    color: rgba(255, 255, 255, 0.76);
    font-size: 18px;
    background: #747474;
    border-radius: 10px;
    resize: none;
    cursor: pointer;
    justify-self: end;
    margin-left: 150px;
    &_margin {
      margin-top: 13px;
    }
    &_row {
      @include flex-row;
    }
  }
  &__btn-swap {
    margin-top: 30px;
    height: 50px;
  }
}
.error {
  color: #e53935;;
}
.invalid {
  border-color: #e53935;
}
.gold {
  background: #FFC500;
}
</style>
