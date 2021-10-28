<template>
  <div class="main">
    <Header />
    <Container />
<!--     <Confirm />-->
    <ChooseToken v-if="listTokens"/>
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
    // Confirm,
    ChooseToken,
    // Error,
    // Successful,
    Container,
  },
  computed: {
    ...mapGetters({ listTokens: 'modals/listTokens' }),
  },
};
</script>
