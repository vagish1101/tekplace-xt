<template>
  <div class="header-wrap">
    <img class= "align-left logo" src="../assets/TEKsystems_Logo.png" alt="">
    <input type="text" name="" >
    <div class="login">
      <form action="">
        <input type="text" name="" id="">
        <input type="password" name="" id="">
        <input type="submit" name="" id="" value="Login">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .logo {
    float: left;
    width: 200px;
  }
  .login {
    float: right;
  }
</style>
