<template>
  <div>
    <div
      class="modal__drop back-drop"
      @click="closeModal"
    />
    <div class="modal__token">
      <div class="token__title">
        <h2 class="token__title">
          Choose token
        </h2>
        <img
          src="~/assets/img/error/close_small.png"
          alt=""
          class="close"
          @click="closeModal"
        >
      </div>
      <ul class="list__tokens">
        <li
          v-for="t in tokens"
          :key="t.symbol"
          @click="currentToken(t)"
          class="section__tokens"
        >
          <div class="box-token__inner-top">
            <p class="icon_background">
              <img :src="require(`~/assets/icons/${network}.png`)">
            </p>
            <span>{{ network === 'ethereum'? 'ETH': 'BscScan' }}</span>
          </div>
          <div class="box-token__inner-bottom">
            {{ t.balance }} {{ t.symbol }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChooseToken',
  computed: {
    ...mapGetters({
      tokens: 'swap/tokens',
      network: 'wallet/network',
      // listTokens: 'modals/listTokens',
    }),
  },
  methods: {
    closeModal() {
      this.$store.dispatch('swap/closeModal', false);
    },
    currentToken(t) {
      this.$store.dispatch('wallet/setToken', t);
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal__token {
  position: fixed;
  top: 25%;
  left: 50%;
  @include font;
  width: 546px;
  height: 448px;
  padding: 30px;
  background: #3C3C3C;
  border-radius: 14px;
  z-index: 1000;
  transform: translateX(-50%);
}

.list__tokens{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}
.section__tokens {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: #3C3C3C;
  border: 1px solid #585858;
  box-sizing: border-box;
  border-radius: 14px;
  margin-bottom: 20px;
  padding: 20px;
}
</style>
