<style lang="scss" scope>
  .menu{
    position: relative;
    padding-top: 1.2rem;
    padding-bottom: 2rem;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
    overflow-y: scroll;
    background: #f6f6f6;
  }
  .show-container{
    height: 100%;
    overflow-y: scroll;
    padding-bottom: .4rem;
    background: #fff;
  }
  .menu .header i{color: #333!important;font-size: .48rem!important;}
  .menu-list{
    ul{
      padding: .4rem;
      li{
        position: relative;
        height: 2.8rem;
        width: 100%;
        margin-bottom: .2rem;
        border-radius: .2rem;
        overflow: hidden;
        border:2px solid #aaa;
        &.book{
          border:2px solid #42a5f5;
          a{
            color:#42a5f5;
          }
        }
        &.volume{
          border:2px solid #ff5252;
          a{
            color:#ff5252;
          }
        }
        &.chapter{
          border:2px solid #009688;
          a{
            color:#009688;
          }
        }
        &.role{
          border:2px solid #ffca28;
          a{
            color:#ffca28;
          }
        }
        a{
          position: relative;
          height: 100%;
          display: block;
          line-height: 2.8rem;
        }
        .icon{
          position: absolute;
          right: 1rem;
          height: 100%;
          width: 2.8rem;
          line-height: 3.4rem;
          opacity: .2;
          i{
            font-size: 3.2rem;
          }
        }
        .name{
          height: 100%;
          text-align: left;
          padding-left: 1rem;
          line-height: 2.8rem;
        }
      }
    }
  }
</style>
<template>
  <div class="menu">
    <Header :rgba="'#fff'" style="box-shadow: 0 2px 5px #eee;">
      <div class="link-left" slot="left-icon" @click="back()">
        <i class="iconfont" style="color:#333">&#xe605;</i>
      </div>
      <span slot="center-tit" style="color:#333">新内容</span>
      <div class="link-right" slot="right-icon">
        <router-link to="/Usercenter">
          <i class="iconfont" style="color:#333;font-size:.48rem">&#xe603;</i>
        </router-link>
      </div>
    </Header>
    <div class="show-container">
      <div class="menu-list">
        <ul>
          <li>
            <div class="icon" @click="setting">
              <i class="iconfont">&#xe621;</i>
            </div>
            <div class="name">设定</div>
          </li>
          <li>
            <div class="icon" @click="idea">
              <i class="iconfont">&#xe639;</i>
            </div>
            <div class="name">构想</div>
          </li>
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
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
@Component({
  components: {
    Header
  }
})
export default class Addcenter extends Vue {
  back () {
    this.$router.go(-1)
  }
  setting () {
    // 记录设定；零碎的设定
    this.$router.push({ name: 'Setting' })
  }
  idea () {
    // 记录构想；零碎的构想
  }
}
</script>
