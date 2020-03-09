<style lang="scss" scope>
.usercenter{
  height: 100%;
}
  .center-content{
    background: #f6f6f6;
    height: 100%;
  }
  .userinfos{
    background: url('../../assets/images/userbackground.jpg') no-repeat;
    background-size: 100% ;
    background-position: 0 60%;
    padding: 0 .4rem;
    padding-top: 1.2rem;
  }
  .infos{
    position: relative;
    padding: .4rem 0;
  }
  .infos::after{
    clear: both;
    content: "";
    display: block;
  }
  .userhead{
    height: 1.3333rem;
    width: 1.3333rem;
    float: left;
  }
  .userhead img{
    width: 100%;
    height: 100%;
  }
  .username{
    height: 1.3333rem;
    float: left;
    margin-left: .4rem;
    max-width: 6.4rem;
    text-align: left;
  }
  .username .name{
    height: .6666rem;
    line-height: .6666rem;
    font-size: .4rem;
    color: #fff;
  }
  .text-over{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .username .sex{
    height: .6666rem;
    line-height: .6666rem;
    font-size: .36rem;
    color: #fff;
  }
  .sex i{
    background: #fff;
    color: #39f;
    font-size: .4rem;
    border-radius: .2rem;
  }
  .infos-arrows{
    position: absolute;
    font-size: .4rem;
    top: .8rem;
    right: 0;
    color:#fff;
  }
  .infos-alter p{
    height: .64rem;
    line-height: .64rem;
    font-size: .32rem;
    color: #fff;
    text-align: left;
  }
  .center-list{
    margin-top: .4rem;
  }
  .center-list ul {
    padding: 0 .4rem;
    background: #fff;
  }
  .center-list ul li{
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: left;
    font-size: .4rem;
    border-bottom:1px solid #f0f0f0;
  }
  .center-list ul li span{
    margin-left: .2rem;
    letter-spacing: .05rem;
  }
  .center-list ul li:last-child{
    border:none;
  }
  .center-list ul li a{
    display: block;
    color: #666;
  }
  .list-arrows{
    float:right;
  }
  .el-button{
    width: 9.2rem;
    margin: .8rem auto;
  }
</style>
<template>
  <div class="usercenter" @scroll="scl()" ref="main">
    <Header/>
    <child :border="border" :color="color">
      <div class="link-left" slot="left-icon" @click="back()">
        <i class="iconfont" :style="{color:color}">&#xe605;</i>
      </div>
      <span slot="center-tit">个人中心</span>
    </child>
    <div class="center-content">
      <div class="userinfos">
        <div class="infos">
          <div class="userhead">
            <img src="@/assets/images/head.png">
          </div>
          <div class="username">
            <p class="name text-over">404_NotFound</p>
            <div class="sex text-over">
              <i class="iconfont">&#xe76d;</i>
              男
            </div>
          </div>
          <i class="iconfont infos-arrows">&#xe748;</i>
        </div>
        <div class="infos-alter">
          <p>编辑个人资料</p>
          <p>阅读2052小时  读过12本 </p>
        </div>
      </div>
      <div class="center-list">
        <ul>
          <li>
            <router-link to="/Usercenter">
              <i class="iconfont list-icon" style="color:#ffca28;">&#xe720;</i>
              <span>书籍详情</span>
              <i class="iconfont list-arrows">&#xe748;</i>
            </router-link>
          </li>
          <li>
            <router-link to="/Menu">
              <i class="iconfont list-icon" style="color:#19b06a;">&#xe61a;</i>
              <span>添加</span>
              <i class="iconfont list-arrows">&#xe748;</i>
            </router-link>
          </li>
          <li>
            <router-link to="/Usercenter">
              <i class="iconfont list-icon" style="color:#ff2c2c;">&#xe629;</i>
              <span>回收站</span>
              <i class="iconfont list-arrows">&#xe748;</i>
            </router-link>
          </li>
          <li>
            <router-link to="/Usercenter">
              <i class="iconfont list-icon" style="color:#4a90e2;">&#xe6c8;</i>
              <span>关于</span>
              <i class="iconfont list-arrows">&#xe748;</i>
            </router-link>
          </li>
        </ul>
      </div>
      <el-button @click="logout()">退出登录</el-button>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  data () {
    return {
      opacity: 0,
      border: 'unset',
      color: 'rgba(255,255,255,1)'
    };
  },
  mounted () {
    this.act = parseInt(this.$route.params.act);
  },
  components: {
    'child': Header,
    Footer
  },
  methods: {
    scl () {
      let scrollval = this.$refs.main.scrollTop;
      this.opacity = (scrollval > 100 ? 100 : scrollval) / 100;
      scrollval > 100 ? this.border = '1px solid #f6f6f6' : this.border = 'unset';
      this.color = 'rgba(255,255,255,' + (1 - (scrollval > 100 ? 100 : scrollval)) + ')';
    },
    back () {
      this.$router.go(-1);
    },
    logout () {
      this.$router.push('/customer');
    }
  }
};
</script>
