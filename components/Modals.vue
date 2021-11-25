<template>
  <div>
    <Confirm v-if="confirm === 'swap' || confirm === 'redeem'"/>
    <ChooseToken v-if="modalTokens"/>
    <Successful v-if="successModal"/>
    <Error v-if="errorModal"/>
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
      successModal: 'modals/successModal',
      errorModal: 'modals/errorModal'
    })
  },
  components: {Confirm, ChooseToken, Successful, Error},

}
</script>

<style scoped></style>
