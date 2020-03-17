<template>
<div class="myapp">
  <router-view />
  <Footer />
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Footer from '@/components/Footer.vue'
@Component({
  components: {
    Footer
  }
})
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
<style lang="scss" scope>
.myapp{
  height: 100vh;
  background: #fff;
}
</style>
