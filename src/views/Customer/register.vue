<style lang="scss">
  .register-main{
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
    display: flex;
    justify-content: center;
  }
</style>

<template>
  <div class="register-main">
    <div class="input-suffix">
      <el-input prefix-icon="el-icon-user" v-model="username" placeholder="请输入用户名"></el-input>
    </div>
    <div class="input-suffix">
      <el-input prefix-icon="el-icon-lock" v-model="password" placeholder="请输入密码"></el-input>
    </div>
    <div class="input-suffix">
      <el-input prefix-icon="el-icon-lock" v-model="repassword" placeholder="再次输入密码"></el-input>
    </div>
    <el-link type="primary" :underline="false" @click="cgPage('login')">
      已有帐号？去登录
    </el-link>
    <div class="input-suffix">
      <el-button type="primary" @click="register()" style="width: 80%;">注册</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
@Component
export default class Login extends Vue {
  @Prop({ default: () => {}, type: Function }) cgPage!: any
  username: string = ''
  password: string = ''
  repassword: string = ''
  register () {}
}
</script>
