<template>
    <div class='mycontainer'>
        <div class='row'>
            <div class='col-3 nopadding'>
                <aside>
                    <div class='makeconfess'>
                        <button type='button' class='btn btn-primary flatbutton'>
                             <router-link to="/create">
                            <span class='glyphicon glyphicon-plus'></span>
                            &nbsp; Your Confession</router-link></button>
                    </div>
                    <ul>
                        <li><span class='glyphicon glyphicon-question-sign'></span>Confession</li>
                        <li><span class='glyphicon glyphicon-copyright-mark'></span>Categories</li>
                        <li><span class='glyphicon glyphicon-heart-empty'></span>Badges</li>
                        <li> <span class='glyphicon glyphicon-user'></span>Users</li>
                    </ul>
                </aside>
            </div>
            <div class='col-7 addborder'>
                <section>
                    <div class='confess-header rowminus'>
                        <div class='row'>
                            <div class='col-3'><h2>All Confessions</h2></div>
                            <div class='offset-3'></div>
                            <div class='col-6'>
                                <span class="fit">Filter By</span>
                                <div class="styled-select slate">
                                    <select>
                                        <option>Select Categories</option>
                                        <option>The second option</option>
                                    </select>
                                </div>
                                 <div class="styled-select slate allselect">
                                    <select name='' class='all'>
                                        <option value=''>All</option>
                                    </select>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div class='confess-list'>
                        <article class= "row"  v-for='(data, index) in DataList' :key='index'>
                            <div class='col-2'><img  src= '../assets/user1.jpg'  alt=''></div>
                            <div class='col-6'>
                                <h3>{{data.title}}</h3>
                                <p>Submited By @<b>{{data.author}}</b> &nbsp; {{data.Posted}}</p>
                            </div>
                            <div class='col-4'>
                                <div class='row'>
                                    <div class='col-4'>
                                    <div class='numberCircle'>{{data.View}}</div> <br>
                                    <span>View</span>
                                </div>
                                <div class='col-4'>
                                    <div class='numberCircle colored'>{{data.Vote}}</div> <br>
                                    <span>Votes</span>
                                </div>
                                <div class='col-4'>
                                    <div class='numberCircle'>{{data.Reply}}</div> <br>
                                    <span>Reply</span>
                                </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
            <div class='col-2'>
                <div class='rightiside-wrap'>
                    <div class="right-confes">
                        <p>Confession</p>
                        <h2>180</h2>
                    </div>
                    <div class="right-member">
                         <p>Members</p>
                        <h2>110</h2>
                    </div>
                </div>
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
    .flatbutton {
        border-radius: 1px;
        font-size: 17px;
        margin: 29px 0;
        padding: 11px 28px;
        font-weight: bold;
        a {
            color:white;
            text-decoration: none;
        }
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
        font-size: 19px;
        li {
            margin-bottom: 25px;
            margin-left: 48px;
            color: #564e4e;
            span {
                margin-right: 12px;
            }
        }
    }
    .confess-header {
        padding:10px;
        // h2 {
        //     display: inline-block;
        //     padding-left: 15px;
        //     color: #4c4747;
        // }
        // > div {
        //     display: inline-block;
        //     float: right;
        // }
        // p {
        //     display: inline-block;
        //     font-size: 16px;
        //     margin-right: 9px;
        //     color: #8a8686;
        // }
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
        border-right: 1px solid #d2c7c7;
    }
    article.row{
        padding-bottom: 18px;
        padding-top: 23px;
        border-bottom: 1px solid #d2c7c7;
    }
    .confess-header {
        h2 {
            line-height: 35px;
        }
        padding-bottom: 15px;
        border-bottom: 1px solid #d2c7c7;
    }
    .rowminus {
        margin: 0 -15px;
    }
    .styled-select {
        background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;
        overflow: hidden;
    }

    .styled-select select {
        background: transparent;
        border: none;
        font-size: 13px;
        height: 34px;
        width: 228px;
        padding: 5px !important; /* If you add too much padding here, the options won't show in IE */
        border: 1px solid #ccc;

    }
    .all {
        width: 100px !important;
    }
    .styled-select.slate {
        background: url(http://i62.tinypic.com/2e3ybe1.jpg) no-repeat right center;
        height: 34px;
        width: 200px;
        display: inline-block;
        margin-right: 15px;
    }
    .allselect {
        width: 80px !important;
    }
    .fit {
        margin-right: 10px;
        position: relative;
        top: -11px;
    }
    .right-sidebar {
        background: #efeff9;
    }
    .rightiside-wrap {
        margin-top: 50px;
        p {
            color: #564e4e;
            font-size: 17px;
        }
    }
</style>
