<template>
  <div class="card">
    <CardSection/>
    <CardContent/>
    <CardDropdown/>
  </div>
</template>

<script>
import CardSection from "./CardSection";
import CardContent from "./CardContent";
import CardDropdown from "./CardDropdown";
export default {
  name: "Card",
  components: {CardDropdown, CardContent, CardSection}
}
</script>

<style lang="scss" scoped>
.card {
  @include font;
  /*font-family: Montserrat, sans-serif;*/
  /*font-style: normal;*/
  /*font-weight: 600;*/
  /*font-size: 18px;*/
  width: 100%;
}
</style>
