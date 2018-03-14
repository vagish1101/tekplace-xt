<template>
  <div class="body-wrap">
    <Header/>
    <Confession />
  </div>
</template>

<script>
import Header from './Header'
import Confession from './Confession'
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'Header': Header,
    'Confession': Confession
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
