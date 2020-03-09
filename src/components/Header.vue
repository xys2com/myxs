<style lang="scss" scope>
  .header{
    height: 1.2rem;
    background: rgba(64,158,255,0);
    position: fixed;
    width: 100%;
    line-height: 1.2rem;
    font-size: .48rem;
    font-weight: bold;
    max-width: 640px;
    letter-spacing: .1rem;
    color:#fff;
    z-index: 10;
    top:0;
    text-align: center;
  }
  .link-right{
    position: absolute;
    height: 1.2rem;
    width: 1.2rem;
    right: 0;
    top:0;
  }
  .link-left{
    position: absolute;
    height: 1.2rem;
    width: 1.2rem;
    left: 0;
    top:0;
  }
  .link-right a,.link-left a{
    display: block;
  }
</style>
<template>
  <div class="header" :style="{background:rgba}">
    <slot name="left-icon"></slot>
    <slot name="center-tit"></slot>
    <slot name="right-icon"></slot>
  </div>
</template>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Footer extends Vue {
  @Prop() rgba
  @Prop() border
  @Prop() color
}
</script>
