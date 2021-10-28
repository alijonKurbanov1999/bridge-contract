<template>
  <div>
    <div
      class="modal__drop back-drop"
      @click="close"
    />
    <div class="modal__window error">
      <h3>Что-то пошло не так</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <span
        class="close-small"
        @click="close"
      ><img
        src="~/assets/img/error/close_small.png"
        alt="#"
        class="close"
      ></span>
      <span class="round"><img
        src="~/assets/img/error/Union.png"
        alt="#"
      ><img
        src="~/assets/img/error/close.png"
        alt="#"
      ></span>
      <span class="bubbles"><img
        src="~/assets/img/error/bubbles.png"
        alt="#"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
};
</script>

<style lang="scss" scoped>

</style>
