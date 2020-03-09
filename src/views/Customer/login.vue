<style lang="scss" scope>
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
    display: flex;
    justify-content: center;
  }
</style>
<template>
  <div class="login-main">
    <div class="input-suffix">
      <el-input prefix-icon="el-icon-user" v-model="username" placeholder="请输入用户名"></el-input>
    </div>
    <div class="input-suffix">
      <el-input prefix-icon="el-icon-lock" v-model="password" placeholder="请输入密码"></el-input>
    </div>
    <el-link type="primary" :underline="false" @click="cgPage('register')">
      没有帐号？去注册
    </el-link>
    <div class="input-suffix">
      <el-button type="primary" @click="login()" style="width: 80%;">登录</el-button>
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
  login () {
    this.$router.push('/application')
    // @ts-ignore
    // this.$axios.myGet('/xus').then(({ data, status }) => {
    //   if (status === 200) {
    //     console.log(data)
    //     this.$router.push({ name: 'Application' })
    //   }
    // }).catch((err: any) => {
    //   console.log(err)
    // })
  }
}
</script>
