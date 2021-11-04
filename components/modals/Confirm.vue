<template>
  <div>
    <div class="modal__drop back-drop"/>
    <div class="modal-confirm">
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
        <span class="token__data_color">{{ data.sender }}</span>
      </div>
      <div class="token__data">
        <span>Адрес получателя</span>
        <span class="token__data_color">{{ data.recipient }}</span>
      </div>
      <div class="token__data">
        <span>Токен</span>
        <span class="token__data_color">{{ data.symbol }}</span>
      </div>
      <div class="token__exchange">
        <div class="token__data">
          <span>Сумма переводов</span>
          <span class="clr-grey">{{ data.amount }} {{ data.symbol }}</span>
        </div>
        <div class="exchange-items">
          <div class="exchange-icon">
            <p class="icon_background">
              <img
                :src="require(`~/assets/icons/${IMG_NET_FROM}.png`)"
                alt=""
              >
            </p>
            <span class="token__data_color">{{ NET_FROM }}</span>
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
                :src="require(`~/assets/icons/${IMG_NET_TO}.png`)"
                alt=""
              >
            </p>
            <span class="token__data_color">{{ NET_TO }}</span>
          </div>
        </div>
      </div>
      <div class="token__data">
        <span>Комиссия</span>
        <span class="token__data_color">0</span>
      </div>
      <div class="btn-box">
        <button class="btn btn_default btn_default-margin" @click="cancel">
          Отменить
        </button>
        <button class="btn btn_ocean" @click.prevent="confirmREDEEM">
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
      data: 'modals/data',
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
      console.log('DATA OF REDEEM IS: ', this.data)
      this.$store.dispatch('modals/redeem', this.data)
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-confirm {
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
  &_color {
    @include font;
    line-height: 20px;
    letter-spacing: 1px;
    color: #C7C7C7;
  }
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

</style>
