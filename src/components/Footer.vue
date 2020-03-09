<style lang="scss" scope>
.footer{
  height: 1.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  border-top:1px solid #eee;
  box-shadow: 0 -.2rem .2rem #fafafa;
  display: flex;
  max-width: 640px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.footer .item{
  width: 2.5rem;
  color: #999;
}
.icon{
  height: .75rem;
  line-height: .5;
}
.icon .iconfont{
  font-size: .6rem;
}
.item-name{
  font-size: .36rem;
}
.footer>a{
  text-decoration: none;
}
</style>
<template>
  <div v-if="show" class="footer" ref="footer">
    <router-link to="/Application">
      <div class="item" :style="{color:footer[0].color}">
        <div class="icon">
          <i class="iconfont">&#xe680;</i>
        </div>
        <p class="item-name">主页</p>
      </div>
    </router-link>
    <router-link to="/Menu">
      <div class="item" :style="{color:footer[1].color}">
        <div class="icon">
          <i class="iconfont">&#xe600;</i>
        </div>
        <p class="item-name">添加</p>
      </div>
    </router-link>
    <router-link to="/Management">
      <div class="item" :style="{color:footer[2].color}">
        <div class="icon">
          <i class="iconfont">&#xe607;</i>
        </div>
        <p class="item-name">管理</p>
      </div>
    </router-link>
    <router-link to="/Usercenter">
      <div class="item" :style="{color:footer[3].color}">
        <div class="icon">
          <i class="iconfont">&#xe603;</i>
        </div>
        <p class="item-name">我的</p>
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component
export default class Footer extends Vue {
  footer: any = [
    { color: '' },
    { color: '' },
    { color: '' },
    { color: '' }
  ]
  act: number = 0
  show: boolean = true
  mounted () {
    this.highlight()
    this.footerposition()
    window.onresize = () => {
      this.footerposition()
    }
  }
  highlight () {
    let routeStr = this.$route.path
    if (routeStr.indexOf('Application') >= 0) {
      this.act = 0
    } else if (routeStr.indexOf('Menu') >= 0) {
      this.act = 1
    } else if (routeStr.indexOf('Management') >= 0) {
      this.act = 2
    } else if (routeStr.indexOf('Usercenter') >= 0) {
      this.act = 3
    }
    for (let i = 0; i < this.footer.length; i++) {
      this.footer[i].color = '#999'
    }
    this.footer[this.act].color = 'rgb(64,158,255)'
  }
  footerposition () {
    let paretnsWidth = document.body.offsetWidth
    // @ts-ignore
    paretnsWidth > 640 ? this.$refs.footer.style.left = (paretnsWidth - 640) / 2 + 'px' : this.$refs.footer.style.left = 0
  }
  @Watch('$route')
  reset () {
    this.highlight()
  }
}
</script>
