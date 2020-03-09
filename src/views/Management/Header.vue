<style lang="scss" scope>
  .header-new{
    height: 1.2rem;
    background: #fff;
    position: fixed;
    width: 100%;
    line-height: 1.2rem;
    font-size: .48rem;
    font-weight: bold;
    max-width: 640px;
    letter-spacing: .1rem;
    color:#333;
    z-index: 10;
    border-bottom: 1px solid #f0f0f0;
    top:0;
    box-shadow: 0 2px 5px #eee;
  }
  .back{
    position: absolute;
    height: 1.2rem;
    width: 1.2rem;
    top:0;
  }
  .link-center{
    position: absolute;
    height: 1.2rem;
    width: 1.2rem;
    top:0;
    right: 0;
  }
  .link-center i{
    font-size: .48rem;
    color: #333;
  }
</style>
<template>
  <div class="header-new">
    <div class="back" @click="back()">
      <i class="iconfont">&#xe605;</i>
    </div>
    <span>书籍管理</span>
    <router-link to="/Usercenter">
      <div class="link-center">
        <i class="iconfont">&#xe603;</i>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1);
    }
  }
};
</script>
