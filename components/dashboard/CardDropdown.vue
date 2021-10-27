<template>
  <div class="section__lists">
    <h2>Мои обмены</h2>
    <ul class="lists" v-for="(item, id) in ListExchanges" :key="id">
      <li class="list list-exchange">
        <div class="exchange-icon">
          <p class="icon-background">
            <img
              :src="require(`~/assets/icons/${item.network === 'ETH' ? 'ethereum' : 'bscscan'}.png`)"
              alt=""
              class="ethereum-icon"
            >
          </p>
          <span>{{ item.network === 'ETH' ? 'ETH' : 'BSC' }}</span>
        </div>
        <div>
          <img
            src="~/assets/icons/coolicon.png"
            alt=""
            width="20"
            height="15"
          >
        </div>
        <div class="exchange-icon">
          <p class="icon-background">
            <img
              :src="require(`~/assets/icons/${item.network === 'ETH' ? 'bscscan' : 'ethereum'}.png`)"
              alt=""
            >
          </p>
          <span>{{ item.network === 'ETH' ? 'BSC' : 'ETH' }}</span>
        </div>
      </li>
      <li class="list list-user">
        <span class="list-title">Получатель</span>
        <span class="list-text" v-if="item.recipient">{{ item.slice(0, 8).concat('...') + item.slice(-5) }}</span>
      </li>
      <li class="list list-transaction">
        <span class="list-title">Транзакция</span>
        <span class="list-text">{{ item.transactionHash }}</span>
      </li>
      <li class="list list-sum">
        <span class="list-title">Сумма</span>
        <span class="list-text">{{ item.amount }} {{ item.tokenSymbol }}</span>
      </li>
      <li class="list">
        <button
          class="btn btn-redeem btn-default"
          @click.prevent="redeem(item.id, item.sender, item.amount, item.nonce, item.chainFrom, item.network, item.tokenSymbol)"
        >
          <img
            src="~/assets/icons/redeem.png"
            alt=""
            class="btn-icon"
          >Выкуп
        </button>
      </li>
      <li class="list">
        <button class="btn btn-exchange">
          <a
            :href="item.network === 'ETH'? `https://rinkeby.etherscan.io/tx/${item.transactionHash}`: `https://testnet.bscscan.com/tx/${item.transactionHash}`"
          >
            <img
              src="~/assets/icons/exchange.png"
              alt=""
              class="btn-icon"
            >
          </a>
          Обмен
        </button>
<!--        <button class="btn btn-exchange" @click.prevent="OpenSwap(item.network, item.transactionHash)">
            <a :href="urlSwap">
              <img
                src="~/assets/icons/exchange.png"
                alt=""
                class="btn-icon"
              >
            </a>
          Обмен
        </button>-->
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'CardDropdown',
  data() {
    return {
      ListExchanges: [],
    }
  },
  mounted() {
    this.loadingData();
  },
  computed: {
    // ...mapGetters({urlSwap: 'swap/urlSwap'})
    // urlSwap(net, hash) {
    //   if(net === 'ETH') {
    //     return `https://rinkeby.etherscan.io/tx/${hash}`
    //   } else if (net === 'BSC') {
    //     return `https://testnet.bscscan.com/tx/${hash}`
    //   }  else { return  ''}
    // }
    // NET_FROM(net) {
    //   return net === 'ETH' ? 'ETH' : 'BSC';
    // },
    // NET_TO(net) {
    //   return net === 'ETH' ? 'BSC' : 'ETH';
    // },
    // IMG_NET_FROM(net) {
    //   return net=== 'ETH' ? 'ethereum' : 'bscscan';
    // },
    // IMG_NET_TO(net) {
    //   return net === 'ETH' ? 'bscscan' : 'ethereum'
    // }
  },
  methods: {
    async loadingData() {
      console.clear();

      try {
        const { result, } = await this.$axios.$post(`/api/v1/transaction/?limit=5&offset=0`, {
          user: '0x6870c9300b2166ffecce17b0598195da629733c3',
        });
        this.ListExchanges = result.rows;
        console.log('result1', result.rows);
      }
      catch(e) {
        console.error('Error in loadingData', e)
      }

    },
    async redeem(id, sender, amount, nonce, chainFrom, network, symbol) {
      console.log('ID: ', id)
      console.log('AMOUNT: ', amount)
      console.log('ANONCE: ', nonce)
      console.log('CHAIN_FROM: ', chainFrom)
      console.log('NETWORK: ', network)
      console.log('SYMBOL: ', symbol)
      let v;
      let r;
      let s;
      try {
        const { result, } = await this.$axios.$post(`/api/v1/transaction/${id}/sign`, {
          user: sender,
          network
        });
        v = result.v;
        r = result.r;
        s = result.s;
        console.log('result2', result.v);
      }
      catch(err) {
        console.error('Error: ', err)
      }
      console.log('V', v);
      console.log('R', r);
      console.log('S', s);

      this.$store.dispatch('redeem/redeem', {sender, amount, nonce, chainFrom, symbol, v, r, s})
    }
    // OpenSwap(network, hash) {
    //   this.$store.dispatch('', network, hash);
    //   console.log('network: ', network);
    //   console.log('HASH: ', hash);
    // }
  }
};
</script>

<style lang="scss" scoped>
.section__lists {
  @include font;
  @include white;
  width: 100%;
}
.lists {
  width: 100%;
  @include flex-row;
  flex-wrap: wrap;
  padding: 20px;
  margin-top: 25px;
  background: #3C3C3C;
  border-radius: 14px;
}
.list-title {
  line-height: 25px;
  color: #ABABAB;
}
.list-text {
  @include font;
  line-height: 20px;
  @include white;
}
.btn-icon {
  position: absolute;
  margin-left: -30px;
}
.btn-redeem {
  right: 13px;
}
.btn-exchange {
  @include background-black;
  @include white;
  border: black;
}
.list-user,
.list-transaction,
.list-sum{
  width: 170px;
  margin-left: 25px;
}
.list-sum {
  width: 100px;
}
</style>
