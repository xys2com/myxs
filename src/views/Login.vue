<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 17:20:04
 * @LastEditTime: 2019-08-23 09:37:19
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="customer">
    <div class="backgound">
      <img v-if="backimg==0" src="@/assets/images/background.jpg">
      <img v-if="backimg==1" src="@/assets/images/background1.jpg">
      <img v-if="backimg==2" src="@/assets/images/background2.jpg">
    </div>
    <div class="logo">
      <img src="@/assets/images/logo.png">
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { login, userMenu } from '@/api/user'
// @ts-ignore
import Cookies from 'js-cookie'
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component
export default class Login extends Vue {}
</script>

<style lang="scss" module>
.customer{
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  overflow: hidden;
}
.backgound{
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top:0;
  overflow: hidden;
  filter: blur(7px);
  z-index: -1;
  img{
    position: absolute;
    left: 0;
    width: 400%;
    height: 100%;
    -webkit-animation:anm 60s infinite linear;
    animation:anm 60s infinite linear;
    opacity: 0;
  }
}
@keyframes anm{
  0%   {left: -180%;opacity: .3;display:none;}
  5%   {left: -192%;opacity: 1;display:block;}
  50% {left: -300%;opacity: 1;display:block;}
  95% {left: -192%;opacity: 1;display:block;}
  100% {left: -180%;opacity: .4;display:none;}
}
.logo{
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius:.5rem;
  overflow: hidden;
  margin: 1rem auto;
  opacity: .75;
  filter: blur(.7px);
  img{
    width: 100%;
    height: 100%;
  }
  &::after{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: .4rem 0 .4rem #fff inset,
    0 .4rem .4rem #fff inset,
    -.4rem 0 .4rem #fff inset,
    0 -.4rem .4rem #fff inset;
  }
}

.login-main{
  padding: 0 .4rem;
  position: relative;
  overflow: hidden;
  .el-link{
    display: block;
    margin: .5rem 0;
    text-align: left;
  }
}
.input-suffix{
  margin-top: .8rem;
}
</style>
