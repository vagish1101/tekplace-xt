<template>
    <div class="createwrap">
            <h3>Create Your Confess.. !</h3>
            <div class="row">
                <div class="col-8">
                    <div class="row">
                        <form action="" class="col-8">
                            <label for="">URL</label>
                            <input type="text" name="" id="">
                            <label for="">Text</label>
                            <textarea name="" id="" cols="68" rows="10"></textarea>
                            <br>
                            <button class="btn btn-dark">Submit</button>
                        </form>
                        <div class="col-4 Recentwrap">
                            <h3>Recent Posts</h3>
                            <div class="recent">
                                <article class= "row"  v-for='(data, index) in DataList' :key='index'>
                                    <div class='col-4'></div>
                                    <div class='col-8'>
                                        <h4>{{data.title}}</h4>
                                        {{data.Posted}}
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreateConfession',
  data () {
    return {
      DataList: []
    }
  },
  methods: {
    created: function () {
      let vm = this
      axios.get(`https://api.myjson.com/bins/i2vb9`)
        .then(response => {
          vm.DataList = response.data.List
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  mounted: function () {
    this.created()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .createwrap {
        margin: 30px;
         h3 {
            padding-bottom: 30px;
            border-bottom: 2px solid #d2c7c7
        }
        label {
            display: block;
        }
        form {
            margin-top: 30px;
        }
        input[type="text"] {
            width: 89%;
            margin-bottom: 14px;
        }
    }
    .recent {
        height: 400px;
        overflow-y: scroll;
        overflow-x: hidden
    }
    article.row {
    box-shadow: 4px 4px 5px 3px rgba(0, 0, 0, 0.2);
    margin: 15px;
    padding: 12px;
    }
    .Recentwrap {
        margin-top: 30px;
    }
    button.btn.btn-dark {
        width: 144px;
        border-radius: 1px;
    }
</style>
