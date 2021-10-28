<template>
  <div class="section__crosschain">
    <h2 class="inner-title">
      Кроссчейн обмен
    </h2>
    <validation-observer v-slot="{ handleSubmit }">
      <form
      @submit.prevent="handleSubmit(Swap)"
      action="#"
      class="form__exchange"
      >
      <validation-provider
        v-slot="{ errors }"
        name="address"
        :rules="'required'"
      >
        <label for="name">Введите адрес получателя</label>
        <input
          id="name"
          type="text"
          placeholder="Placeholder"
          class="input" :class="{invalid: errors[0]}"
          v-model="recipient"
          @keydown.enter="onEnter($event, handleSubmit, Swap)"
        >
        <span class="error"> {{ errors[0] }} </span>
      </validation-provider>
      <label for="sum">Сумма перевода</label>
      <div class="row">
        <div class="row__left">
            <button class="maxAmount" @click="maxNumber">MAX</button>
            <validation-provider
              v-slot="{ errors }"
              name="amount"
              :rules="`required|max:${balance}`"
            >
              <input
              id="sum" type="number"
              placeholder="Placeholder"
              class="input-inner"
              v-model="amount"
              @keydown.enter="onEnter($event, handleSubmit, Swap)"
            >
              <span class="error"> {{ errors[0] }} </span>
            </validation-provider>
            <div
              class="select-inner"
              @click="chooseToken"
            >
              <div v-if="symbol" class="selectOn">
                <p class="icon-background">
                  <img
                    :src=" require(`~/assets/icons/${network}.png`)"
                    class="ethereum-icon"
                  >
                </p>
                {{ symbol }}
              </div>
              <p v-else class="defSelect">Choose token</p>
              <img
                src="~/assets/icons/down.png"
                alt=""
              >
          </div>
        </div>
        <div class="row__right">
          <div class="row-background" :class="network == 'bscscan' ? 'gold' : ''">
            <p class="icon-background">
              <img
                :src=" require(`~/assets/icons/${IMG_NET_FROM}.png`)"
                class="ethereum-icon"
              >
            </p>
            <span>от {{ NET_FROM }}</span>
          </div>
          <img
            src="../../assets/icons/equal.png"
            class="equal"
          >
          <div class="row-background" :class="network == 'bscscan' ? '' : 'gold'">
            <p class="icon-background">
              <img
                :src=" require(`~/assets/icons/${IMG_NET_TO}.png`)"
                alt=""
              >
            </p>
            <span>Куда {{ NET_TO }}</span>
          </div>
        </div>
      </div>
      <button class="btn btn-create">
        Создать обмен
      </button>
    </form>
    </validation-observer>
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
      listTokens: 'modals/listTokens',
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
  // mounted() {
  //   this.loadingData()
  // },
  methods: {
    chooseToken() {
      console.log('List tokens before: ', this.listTokens)
      this.$store.dispatch('swap/tokensInfo', this.userAddress, {root: true});
    },
    maxNumber() {
      this.amount = this.balance;
      console.log('max amount: ', this.amount);
    },
    Swap() {
      this.$store.dispatch({
        type: 'swap/Swap',
        userAddress: this.userAddress,
        amount: this.amount,
        recipient: this.recipient,
        symbol: this.symbol,
      });
    },
    onEnter(e, handler, callback) {
      if (!e.ctrlKey) {
        e.preventDefault();
        handler(callback);
      }
    },
   },
};
</script>

<style lang="scss" scoped>
.section__crosschain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background: #3C3C3C;
  border-radius: 14px;
  margin: 25px 0;
}
.inner-title {
  @include font;
  @include white;
  font-weight: 600;
  font-size: 26px;

  margin-bottom: 30px;
}
.row {
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin: 0;
}
.row__left{
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
.input-inner {
  display: block;
  height: 52px;
  width: 400px;
  outline: none;
  border: none;
  padding: 5px;
  color: #8F8F8F;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 1px;
  background: #585858;
  box-sizing: border-box;
  resize: none;
}
.error {
  color: #e53935;;
}
.invalid {
  border-color: #e53935;
}
.maxAmount {
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
.selectOn {
  @include flex-row;
}
.select-inner {
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
}
.defSelect {
  margin-top: 13px;
}
.row__right {
  @include flex-row;
  margin-left: 25px;
}
.row-background {
  @include flex-row;
  @include white;
  @include background-black;
  padding: 20px;
  width: 119px;
  height: 72px;
  border-radius: 16px;
  cursor: pointer;
}
.equal {
  margin: auto 15px;
  cursor: pointer;
}
.gold {
  background: #FFC500;
}
.btn-create {
  margin-top: 30px;
  height: 50px;
}
</style>
