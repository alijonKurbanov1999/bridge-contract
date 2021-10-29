<template>
  <div class="section__lists">
    <h2>Мои обмены</h2>
    <ul v-if="userAddress && ListExchanges.length" class="lists" v-for="(item, id) in ListExchanges" :key="id">
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
        <span class="list-text">{{ item.recepient }}</span>
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
          :disabled="NET === item.network"
          @click.prevent="redeem(item.id, item.sender, item.recepient, item.amount, item.nonce, item.chainFrom, item.network, item.tokenSymbol)"
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
    <div class="pagination">
      <img src="../../assets/icons/prev-page.png" alt="prev" class="prevP" @click="previousPage">
      <span class="numerals" @click="currentPage = startPage">{{ startPage }}</span>
      <span>...</span>
      <span class="numerals" @click="currentPage = endPage">{{ endPage }}</span>
      <img src="../../assets/icons/next-page.png" alt="next" class="nextP" @click="nextPage">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CardDropdown',
  data() {
    return {
      ListExchanges: [],
      currentPage: 0,
      startPage: 1,
      endPage: 3,
    }
  },
  mounted() {
    this.loadingData();
  },
  // updated() {
  //   this.loadingData();
  // },
  computed: {
    ...mapGetters({
      userAddress: 'wallet/userAddress',
      network: 'wallet/network',
      confirm: 'modals/confirm',
      // urlSwap: 'swap/urlSwap'
    }),
    // itemRecipient(recepient) {
    //   return (recepient).split(",").splice(8, 20, '...').join()
    // },
    NET() {
      if (this.network === 'ethereum') {
        return 'ETH'
      } else if (this.network === 'bscscan') {
        return 'BSC'
      } else
        return false
    }
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
      try {
        const { result, } = await this.$axios.$post(`/api/v1/transaction/?limit=5&offset=${this.currentPage}`, {
          user: '0x6870c9300b2166ffecce17b0598195da629733c3',
        });
        this.ListExchanges = result.rows;
        console.log('LIST: ', this.ListExchanges)
      }
      catch(err) {
        console.error('Error in loadingData', err)
      }
    },
    async redeem(id, sender, recepient, amount, nonce, chainFrom, network, symbol) {
      console.log('USER address: ', this.userAddress)
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
      }
      catch(err) {
        console.error('Error: ', err)
      }
      await this.$store.dispatch('modals/confirmRedeem', {
        sender, recepient, amount, nonce, chainFrom, symbol, v, r, s,
      })
    },
    previousPage() {
      if (this.currentPage >= 1) {
        this.startPage--
        this.endPage-=2
        return this.currentPage--
      } else {
        return this.currentPage
      }
    },
    nextPage() {
      if (this.currentPage >= 0) {
        this.startPage++
        this.endPage +=2
        return this.currentPage++
      } else {
        return this.currentPage
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.section__lists {
  @include font;
  @include white;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.lists {
  width: 100%;
  @include flex-row;
  flex-wrap: wrap;
  padding: 20px;
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
.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  justify-self: end;
  width: 207px;
  height: 40px;
  padding: 5px 10px;
  background: #3C3C3C;
  border-radius: 10px;
  align-self: flex-end;
}
.numerals {
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36.33px;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
}
.numerals:hover {
  background: #585858;
}
.prevP,
.nextP {
  cursor: pointer;
}
</style>
