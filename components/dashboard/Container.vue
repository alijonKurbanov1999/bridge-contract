<template>
  <div class="content">
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
.content {
  @include font;
  @include flex-column;
  @include black;
  @include background-black;
  padding: 112px 15%;
  align-items: start;
}
</style>
