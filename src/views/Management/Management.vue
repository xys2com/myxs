<style lang="scss" scope>
  .management{
    position: relative;
    padding-top: 1.2rem;
    padding-bottom: 2rem;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
    overflow-y: scroll;
    background: #f6f6f6;
  }
  .mng-window{
    height: 100%;
    overflow-y: scroll;
    padding-bottom: .4rem;
    background: #fff;
  }
  .management .header i{color: #333!important;font-size: .48rem!important;}
</style>
<template>
  <div class="management">
    <child :rgba="'#fff'" style="box-shadow: 0 2px 5px #eee;">
      <div class="link-left" slot="left-icon" @click="back()">
        <i class="iconfont" style="color:#333">&#xe605;</i>
      </div>
      <span slot="center-tit" style="color:#333">书籍管理</span>
      <div class="link-right" slot="right-icon">
        <router-link to="/Usercenter">
          <i class="iconfont" style="color:#333">&#xe603;</i>
        </router-link>
      </div>
    </child>
    <div class="mng-window">
      <router-view :books="books"></router-view>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  props: {
    books: Array
  },
  components: {
    'child': Header,
    Footer
  },
  methods: {
    back () {
      this.$router.go(-1);
    }
  }
};
</script>
