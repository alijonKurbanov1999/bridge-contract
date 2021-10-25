<template>
  <div>
    <div
      class="modal-backdrop"
      @click="close"
    />
    <div class="modal__window successfully">
      <h3>Транзакция прошла успешно</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <span
        class="close-small"
        @click="close"
      ><img
        src="~/assets/img/successful/close_small.png"
        alt="#"
        class="close"
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
};
</script>

<style lang="scss" scoped>
</style>
