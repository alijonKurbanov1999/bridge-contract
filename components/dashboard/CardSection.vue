<template>
  <div class="box-token">
    <div class="box-token__inner-top">
      <div class="icon_background">
        <img
          :src="require(`~/assets/icons/${network}.png`)"
          alt=""
          class="token-icon"
        >
      </div>
      <span>{{ NETWORK }}</span>
    </div>
    <div class="box-token__inner-bottom_right-side">
      {{ balance }} {{ symbol }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CardSection',
  computed: {
    ...mapGetters({
      balance: 'wallet/balance',
      symbol: 'wallet/symbol',
      network: 'wallet/network',
    }),
    NETWORK() {
      return this.network === 'ethereum'? 'ETH': 'BscScan';
    },
  },
};
</script>
