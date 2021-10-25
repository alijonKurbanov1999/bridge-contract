<template>
  <div class="card">
    <CardSection v-if="userAddress" />
    <CardContent />
    <CardDropdown />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardSection from './CardSection';
import CardContent from './CardContent';
import CardDropdown from './CardDropdown';

export default {
  name: 'Card',
  components: { CardDropdown, CardContent, CardSection },
  computed: {
    ...mapGetters({
      userAddress: 'wallet/userAddress',
    }),
  },
};
</script>

<style lang="scss" scoped>
.card {
  @include font;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 112px 15%;
  align-items: start;
  color: white;
  background: black;
}
</style>
