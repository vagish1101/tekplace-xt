<template>
    <div class='mycontainer'>
        <div class='row'>
            <div class='col-3'>
                <aside>
                    <div class='makeconfess'>
                        <button type='button' class='btn btn-primary flatbutton'>
                            <span class='glyphicon glyphicon-plus'></span>
                            &nbsp; Your Confession</button>
                    </div>
                    <ul>
                        <li><span class='glyphicon glyphicon-question-sign'></span>Confession</li>
                        <li><span class='glyphicon glyphicon-copyright-mark'></span>Categories</li>
                        <li><span class='glyphicon glyphicon-heart-empty'></span>Badges</li>
                        <li> <span class='glyphicon glyphicon-user'></span>Users</li>
                    </ul>
                </aside>
            </div>
            <div class='col-6 addborder'>
                <section>
                    <div class='confess-header'>
                        <h2>All Confession</h2>
                        <div>
                            <p>Filter By</p>
                            <select name='' id=''>
                                <option value=''>Select Categories</option>
                            </select>
                            <select name='' id=''>
                                <option value=''>ALL</option>
                            </select>
                        </div>
                    </div>
                    <div class='confess-list'>
                        <article class= "row"  v-for='(data, index) in List' :key='index'>
                            <div class='col-2'><img  :src= "'../assets/' + data.img + '.jpg'"  alt=''></div>
                            <div class='col-6'>
                                <h3>hEADINGDAS</h3>
                                <p>Submited By @<b>Vagish</b> &nbsp; 8 Hours Ago</p>
                            </div>
                            <div class='col-4'>
                                <div class='row'>
                                    <div class='col-4'>
                                    <div class='numberCircle'>30</div> <br>
                                    <span>View</span>
                                </div>
                                <div class='col-4'>
                                    <div class='numberCircle colored'>30</div> <br>
                                    <span>Votes</span>
                                </div>
                                <div class='col-4'>
                                    <div class='numberCircle'>30</div> <br>
                                    <span>Replay</span>
                                </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
            <div class='col-3'>
                <p>Confession</p>
                <h2>180</h2>
                <p>Members</p>
                <h2>110</h2>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      DataList: [],
      errors: []
    }
  },
  methods: {
    created: function () {
      axios.get(`https://api.myjson.com/bins/itnth`)
        .then(response => {
          debugger
          this.DataList = response.data.List
          debugger
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
    .flatbutton {
        border-radius: 1px;
        font-size: 16px;
        margin: 29px 0;
    }
    aside {
        .makeconfess {
            border-bottom: 1px solid #d2c7c7;
            text-align: center;
        }
    }
    ul {
        padding: 0 35px;
        margin-top:20px;
        padding: 0px;
        list-style: none;
        font-size: 15px;
        li {
            margin-bottom: 10px;
            margin-left: 48px;
            span {
                margin-right: 15px;
            }
        }
    }
    .confess-header {
        h2 {
            display: inline-block;
        }
        > div {
            display: inline-block;
            float: right;
        }
        p {
            display: inline-block;
        }
    }
    .confess-list {
        margin-top: 30px;
        img {
            width: inherit;
            border-radius: 21px;
        }
        span {
            margin-left: 5px
        }
    }
    .numberCircle {
        border-radius: 50%;
        width: 36px;
        height: 36px;
        padding: 8px;
        background: #fff;
        border: 1px solid #d2c7c7;
        color: black;
        text-align: center;
        font: 14px Arial, sans-serif;
    }
    .numberCircle.colored {
        background: #9be29b;
        border: none;
    }
    .addborder {
        border-left: 1px solid #d2c7c7;
    }
    article.row{
        padding-bottom: 36px;
        border-bottom: 1px solid #d2c7c7;
    }
    .confess-header {
        padding-bottom: 15px;
        border-bottom: 1px solid #d2c7c7;
    }
</style>
