<template>
  <div class="section__tokens">
    <div class="section__inner">
      <p class="icon-background">
        <img
          :src="require(`~/assets/icons/${network}.png`)"
          alt=""
          class="ethereum-icon"
        >
      </p>
      <span>{{ network === 'ethereum'? 'ETH': 'BscScan' }}</span>
    </div>
    <div class="section__inner-title right-side">
      <span class="inner-text">
        {{ balance }} {{ symbol }}
      </span>
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
  },
};
</script>

<style scoped>
</style>
