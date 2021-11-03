<template>
  <div>
    <Confirm v-if="confirm"/>
    <ChooseToken v-if="modalTokens"/>
<!--    <Successful />-->
<!--    <Error />-->
  </div>
</template>

<script>
import Confirm from '../components/modals/Confirm';
import ChooseToken from '../components/modals/ChooseToken';
import Successful from '../components/modals/Successfully';
import Error from '../components/modals/Error';
import { mapGetters } from 'vuex'

export default {
  name: "Modals",
  computed: {
    ...mapGetters({
      modalTokens: 'swap/modalTokens',
      confirm: 'modals/confirm',
    })
  },
  components: {Confirm, ChooseToken, Successful, Error},

}
</script>

<style scoped></style>
