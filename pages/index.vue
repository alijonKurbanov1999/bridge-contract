<template>
  <div>
    <Header/>
    <div class="container">
      <Container/>
    </div>
<!--    <Confirm/>-->
<!--    <ChooseToken/>-->
<!--    <Successful/>-->
<!--    <Error/>-->
  </div>
</template>

<script>
import Container from "../components/dashboard/Container";
import Successful from "../components/modals/Successfully";
import Error from "../components/modals/Error";
import ChooseToken from "../components/modals/ChooseToken";
import Confirm from "../components/modals/Confirm";
export default {
  name: "index",
  components: {Confirm, ChooseToken, Error, Successful, Container},
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  padding: 112px 10%;
  width: 100vw;
  color: white;
}
</style>
