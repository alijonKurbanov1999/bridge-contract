<template>
  <div>
    <div
      class="modal__drop back-drop"
      @click="closeSuccess"
    />
    <div class="modal__window modal__window_successfully">
      <h3>Транзакция прошла успешно</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <span
        class="close-small"
        @click="closeSuccess"
      ><img
        src="~/assets/img/successful/close_small.png"
        alt="#"
        class="close-small"
      ></span>
      <span class="round"><img
        src="~/assets/img/successful/Union.png"
        alt="#"
      ><img
        src="~/assets/img/successful/success.png"
        alt="#"
      ></span>
      <span class="bubbles"><img
        src="~/assets/img/successful/bubbles.png"
        alt="#"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Successful',
  methods: {
    closeSuccess() {
      this.$store.dispatch('modals/closeModals', false)
    }
  }
};
</script>
