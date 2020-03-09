<style lang="scss" scope>
  .menu-list{

  }
  .menu-list ul{
    padding: .4rem;
  }
  .menu-list ul li{
    height: 2.8rem;
    width: 100%;
    margin-bottom: .2rem;
    border-radius: .2rem;
    overflow: hidden;
  }
  .book{
    border:2px solid #42a5f5;
  }
  .volume{
    border:2px solid #ff5252;
  }
  .chapter{
    border:2px solid #009688;
  }
  .role{
    border:2px solid #ffca28;
  }
  .book a{
    color:#42a5f5;
  }
  .volume a{
    color:#ff5252;
  }
  .chapter a{
    color:#009688;
  }
  .role a{
    color:#ffca28;
  }
  .menu-list ul li a{
    position: relative;
    height: 100%;
    display: block;
    line-height: 2.8rem;
  }
  .menu-list ul li .icon{
    position: absolute;
    right: 1rem;
    height: 100%;
    width: 2.8rem;
    line-height: 3.4rem;
    opacity: .2;
  }
  .menu-list ul li .icon i{
    font-size: 3.2rem;
  }
  .menu-list ul li .name{
    height: 100%;
    text-align: left;
    padding-left: 1rem;
  }
</style>
<template>
  <div class="menu-list">
    <ul>
      <li class="book">
        <router-link to="">
          <div class="icon">
            <i class="iconfont">&#xe62b;</i>
          </div>
          <div class="name">
            新书籍
          </div>
        </router-link>
      </li>
      <li class="volume">
        <router-link to="">
          <div class="icon">
            <i class="iconfont">&#xe60d;</i>
          </div>
          <div class="name">
            新卷
          </div>
        </router-link>
      </li>
      <li class="chapter">
        <router-link to="">
          <div class="icon">
            <i class="iconfont">&#xe6ab;</i>
          </div>
          <div class="name">
            新章节
          </div>
        </router-link>
      </li>
      <li class="role">
        <router-link to="">
          <div class="icon">
            <i class="iconfont">&#xe6ad;</i>
          </div>
          <div class="name">
            新角色
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

};
</script>
