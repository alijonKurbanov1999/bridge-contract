<template>
  <div class="main">
    <Header />
    <Container />
    <Confirm v-if="confirm"/>
    <ChooseToken v-if="modalTokens"/>
    <!-- <Successful />-->
    <!-- <Error />-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Container from '../components/dashboard/Container';
import Successful from '../components/modals/Successfully';
import Error from '../components/modals/Error';
import ChooseToken from '../components/modals/ChooseToken';
import Confirm from '../components/modals/Confirm';

export default {
  name: 'Index',
  components: {
    Confirm,
    ChooseToken,
    // Error,
    // Successful,
    Container,
  },
  computed: {
    ...mapGetters({
      modalTokens: 'swap/modalTokens',
      confirm: 'modals/confirm',
    }),
  },
};
</script>
