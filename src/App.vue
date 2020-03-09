<template>
  <transition name="el-fade-in"
              mode="out-in">
    <router-view />
  </transition>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  created () {
    // 解决url访问白屏问题
    let href = location.href.split('//')[1].split('/')[1]
    // if (href !== 'login' && this.$store.state.userInfo === null) {
    //   this.$router.replace({ path: '/customer' })
    // }
  }
}
</script>
