<template>
  <div>
    <div class="modal__drop back-drop"/>
    <div class="modal__confirm">
      <div class="token__title">
        <h2>Подтверждение обмена</h2>
        <img
          src="~/assets/img/error/close_small.png"
          alt=""
          class="close"
          @click="cancel"
        >
      </div>
      <div class="token__data">
        <span>Адрес отправителя</span>
        <span class="clr-grey">{{ dataRedeem.sender }}</span>
      </div>
      <div class="token__data">
        <span>Адрес получателя</span>
        <span class="clr-grey">{{ dataRedeem.recipient }}</span>
      </div>
      <div class="token__data">
        <span>Токен</span>
        <span class="clr-grey">{{ dataRedeem.symbol }}</span>
      </div>
      <div class="token__exchange">
        <div class="token__data">
          <span>Сумма переводов</span>
          <span class="clr-grey">{{ dataRedeem.amount }} {{ dataRedeem.symbol }}</span>
        </div>
        <div class="exchange-items">
          <div class="exchange-icon">
            <p class="icon-background">
              <img
                :src="require(`~/assets/icons/${IMG_NET_FROM}.png`)"
                alt=""
              >
            </p>
            <span class="clr-grey">{{ NET_FROM }}</span>
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
                :src="require(`~/assets/icons/${IMG_NET_TO}.png`)"
                alt=""
              >
            </p>
            <span class="clr-grey">{{ NET_TO }}</span>
          </div>
        </div>
      </div>
      <div class="token__data">
        <span>Комиссия</span>
        <span class="clr-grey">0</span>
      </div>
      <div class="btn-box">
        <button class="btn btn-default mr-20" @click="cancel">
          Отменить
        </button>
        <button class="btn btn-ocean" @click.prevent="confirmREDEEM">
          Подтвердить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Confirm',
  computed: {
    ...mapGetters({
      confirm: 'modals/confirm',
      network: 'wallet/network',
      dataRedeem: 'modals/dataRedeem',
    }),
    NET_FROM() {
      return this.network === 'ethereum' ? 'BSC' : 'ETH';
    },
    NET_TO() {
      return this.network === 'ethereum' ? 'ETH' : 'BSC';
    },
    IMG_NET_FROM() {
      return this.network === 'ethereum' ? 'bscscan' : 'ethereum'
    },
    IMG_NET_TO() {
      return this.network === 'ethereum' ? 'ethereum' : 'bscscan';
    },

  },
  methods: {
    cancel() {
      this.$store.dispatch('modals/cancel')
    },
    confirmREDEEM() {
      console.log('DATA OF REDEEM IS: ', this.dataRedeem)
      this.$store.dispatch('modals/redeem', this.dataRedeem)
    }
  }
};
</script>

<style lang="scss" scoped>
.modal__confirm {
  @include font;
  position: fixed;
  top: 15%;
  left: 50%;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 711px;
  background: #3C3C3C;
  border-radius: 14px;
  z-index: 100;
  transform: translateX(-50%);
}
.token__data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
  position: static;
  height: 60px;
  background: #3C3C3C;
  border: 1px solid #585858;
  box-sizing: border-box;
  border-radius: 14px;
}
.token__exchange {
  position: relative;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
}
.exchange-items {
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 auto 20px;
}
.btn-box {
  width: 100%;
  height: 50px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.mr-20 {
  margin-right: 20px;
}
.clr-grey {
  @include font;
  line-height: 20px;
  letter-spacing: 1px;
  color: #C7C7C7;

}
</style>
