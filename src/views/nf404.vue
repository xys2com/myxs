<template>
  <div class="ft-box">
    <div class="ft">
      <div class="message">
        <span>404</span>
        <p>页面不小心飞走了</p>
        <el-button @click="fnBack"
                   type="primary"
                   round>返回
        </el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Home extends Vue {
  created () {
    this.$store.commit('SET_LOADING', false)
  }
  fnBack () {
    if (this.$store.state.userInfo !== null) {
      if (JSON.stringify(this.$store.state.userMenuData) !== '[]') {
        this.$router.go(-1)
      } else {
        this.$store.commit('SET_USER_INFO', null)
        this.$router.replace({ path: '/customer' })
      }
    } else if (this.$store.state.isHome) {
      this.$router.replace({ path: '/' })
    } else if (!this.$store.state.isHome) {
      if (JSON.stringify(this.$store.state.userMenuData) === '[]') {
        this.$store.commit('SET_USER_INFO', null)
        this.$router.replace({ path: '/customer' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="scss">
.ft-box {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  .ft {
    position: relative;
    width: 100%;
    height: 100%;
    .message {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -72%);
      color: #ffffff;
      box-sizing: 0 4px 12px rgba(255, 255, 255, 0.8);
      > span {
        font-size: 280px;
      }
      p {
        padding-top: 20px;
        font-size: 20px;
        color: #999;
      }
    }
    .el-button {
      margin-top: 32px;
      font-size: 14px;
    }
  }
}
</style>
