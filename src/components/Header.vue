<template>
  <div class="header-wrap">
    <router-link to="/">
        <img class= "align-left logo" src="../assets/TEKsystems_Logo.png" alt="">
    </router-link>
    <span class="search">
        <span class="glyphicon glyphicon-search"></span>
        <input type="search" name="" placeholder="Enter Keyword" >
    </span>
    <div class="login">
      <form action="">
        <input type="text"  placeholder="Username">
        <input type="password" name="" id=""  placeholder="Password">
        <input type="submit" name="" class="btn btn-dark" value="Login">
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
    margin-top: -14px;
  }
  .login {
    float: right;
  }
  .header-wrap {
    padding: 10px 20px 30px;
    margin: 10px 0 0;
    border-bottom: 1px solid #d2c7c7;
    input[type="text"], input[type="password"] {
        line-height: 20px;
        padding-left: 5px;
    }
    input.btn.btn-dark {
        line-height: 12px;
        border-radius: 1px;
        margin-top: -4px;
        padding: 6px 12px;
    }
    .search {
        margin-left: 177px;
        width: 24%;
        input {
            width: 23%;
            line-height: 23px;
            border-radius: 11px;
            padding-left: 34px;
            font-size: 12px;
        }
        span {
            left: 34px;
            padding: 5px 9px 9px 7px;
            background: #ef9525;
            color: white;
            border-top-left-radius: 7px;
            border-bottom-left-radius: 7px;
        }
    }
  }
</style>
