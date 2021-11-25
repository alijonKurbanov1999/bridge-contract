<template>
  <div class="dropdown">
    <h2 class="dropdown__title">Мои обмены</h2>
    <ul v-if="userAddress && ListExchanges.length" class="dropdown__list" v-for="(item, id) in ListExchanges" :key="id">
      <li class="item item-exchange">
        <div class="exchange-icon">
          <p class="icon_background">
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
          <p class="icon_background">
            <img
              :src="require(`~/assets/icons/${item.network === 'ETH' ? 'bscscan' : 'ethereum'}.png`)"
              alt=""
            >
          </p>
          <span>{{ item.network === 'ETH' ? 'BSC' : 'ETH' }}</span>
        </div>
      </li>
      <li class="item dropdown__address">
        <span class="dropdown__item-title">Получатель</span>
        <span class="dropdown__item-text">{{ item.recepient.slice(0, 8).concat('...') +  item.recepient.slice(-5) }}</span>
      </li>
      <li class="item dropdown__address">
        <span class="dropdown__item-title">Транзакция</span>
        <span class="dropdown__item-text">{{ item.transactionHash.slice(0, 8).concat('...') + item.transactionHash.slice(-5) }}</span>
      </li>
      <li class="item dropdown__sum">
        <span class="dropdown__item-title">Сумма</span>
        <span class="dropdown__item-text">{{ item.amount }} {{ item.tokenSymbol }}</span>
      </li>
      <li class="item">
        <button
          class="btn dropdown__btn btn_default"
          :disabled="NET === item.network"
          @click.prevent="redeem(item.id, item.sender, item.recepient, item.amount, item.nonce, item.chainFrom, item.network, item.tokenSymbol)"
        >
          <img
            src="~/assets/icons/redeem.png"
            alt=""
            class="dropdown__btn-icon"
          >Выкуп
        </button>
      </li>
      <li class="item">
        <button class="btn dropdown__btn-exchange">
          <a
            :href="item.network === 'ETH'? `https://rinkeby.etherscan.io/tx/${item.transactionHash}`: `https://testnet.bscscan.com/tx/${item.transactionHash}`"
          >
            <img
              src="~/assets/icons/exchange.png"
              alt=""
              class="dropdown__btn-icon"
            >
          </a>
          Обмен
        </button>
      </li>
    </ul>
    <div class="dropdown__pagination">
      <img src="~/assets/icons/prev-page.png" alt="prev" class="dropdown__pagination_cursor" @click="previousPage">
      <span class="dropdown__pagination-numerals" @click="currentPage = startPage">{{ startPage }}</span>
      <span>...</span>
      <span class="dropdown__pagination-numerals" @click="currentPage = endPage">{{ endPage }}</span>
      <img src="~/assets/icons/next-page.png" alt="next" class="dropdown__pagination_cursor" @click="nextPage">
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
    }),
    NET() {
      if (this.network === 'ethereum') {
        return 'ETH'
      } else if (this.network === 'bscscan') {
        return 'BSC'
      } else
        return false
    }
  },
  methods: {
    async loadingData() {
      try {
        const { result, } = await this.$axios.$post(`/api/v1/transaction/?limit=5&offset=${this.currentPage}`, {
          user: '0x6870c9300b2166ffecce17b0598195da629733c3',
        });
        this.ListExchanges = result.rows;
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
      await this.$store.dispatch('modals/confirmation', {
        sender, recepient, amount, nonce, chainFrom, symbol, v, r, s, confirmType: 'redeem'
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
.dropdown {
  @include font;
  @include white;
  display: flex;
  flex-direction: column;
  width: 100%;
  &__list {
    width: 100%;
    @include flex-row;
    flex-wrap: wrap;
    padding: 20px;
    background: #3C3C3C;
    border-radius: 14px;
  }
  &__address {
    width: 170px;
    margin-left: 25px;
  }
  &__sum {
    margin-left: 25px;
    width: 100px;
  }
  &__item {
    &-title {
      line-height: 25px;
      color: #ABABAB;
    }
    &-text {
      @include font;
      line-height: 20px;
      @include white;
    }
  }
  &__btn-exchange {
    @include background-black;
    @include white;
    border: black;
  }
  &__btn-icon {
    position: absolute;
    margin-left: -30px;
    margin-top: 3px;
  }
  &__pagination {
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
    &-numerals {
      position: static;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36.33px;
      height: 30px;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background: #585858;
      }
    }
    &_cursor {
      cursor: pointer;
    }
  }
}
</style>
