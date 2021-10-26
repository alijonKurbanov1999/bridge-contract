<template>
  <div class="section__crosschain">
    <h2 class="inner-title">
      Кроссчейн обмен
    </h2>
    <form
      @submit.prevent="createBridge"
      action="#"
      class="form__exchange"
    >
      <div>
        <label for="name">Введите адрес получателя</label>
        <input
          id="name"
          type="text"
          placeholder="Placeholder"
          class="input"
          v-model="recipient"
        >
      </div>
      <label for="sum">Сумма перевода</label>
      <div class="row">
        <div class="row__left">
            <button class="maxAmount" @click="maxNumber">MAX</button>
            <input
              id="sum" type="number" placeholder="Placeholder" class="input-inner"
              v-model="amount"
            >
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
                :src=" require(`~/assets/icons/${network}.png`)"
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
                :src=" require(`~/assets/icons/${network === 'ethereum' ? 'bscscan' : 'ethereum'}.png`)"
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
      return this.network === 'ethereum' ? 'BSC' : 'ETH';
    },
    NET_TO() {
      return this.network === 'ethereum' ? 'BSC' : 'ETH';
    },
  },
  mounted() {
    this.loadingData()
  },
  methods: {
    chooseToken() {
      this.$store.dispatch('wallet/tokensInfo', this.userAddress);
      // console.log('-----> ', this.listTokens);
    },
    maxNumber() {
      this.amount = this.balance;
      console.log('max amount: ', this.amount);
    },
    createBridge() {
      this.$store.dispatch({
        type: 'wallet/create',
        userAddress: this.userAddress,
        amount: this.amount,
        recipient: this.recipient,
        symbol: this.symbol,
      });
    },
    async loadingData() {
      console.clear();

      try {
        const { result, } = await this.$axios.$post(`/api/v1/transaction/?limit=5&offset=0`, {
          user: '0x6870c9300b2166ffecce17b0598195da629733c3',
        });

        console.log('result', result);
      }
      catch(e) {
        console.error('Error in loadingData', e)
      }

      try {
        const id = 49
        const network = 'BSC'
        const { result, } = await this.$axios.$post(`/api/v1/transaction/${id}/sign`, {
          user: '0x6870c9300b2166ffecce17b0598195da629733c3',
          network
        });

        console.log('result', result);
      }
      catch(e) {
        console.error('Error in loadingData', e)
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
  @include flex-row;
  flex-wrap: wrap;
  padding: 10px;
  background: #585858;
  border: 1px solid #585858;
  box-sizing: border-box;
  border-radius: 14px;
  resize: none;
}
.input-inner {
  display: block;
  height: 52px;
  width: 73%;
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
