<style lang="scss" scope>
.lication-main{
  position: relative;
  padding-bottom: 2rem;
  height: 100%;
  max-width: 640px;
  margin: 0 auto;
  overflow-y: scroll;
}
.banner{
  height: 4.8rem;
  z-index: 0;
  overflow: hidden;
  img{
    width: 100%;
    margin-top: -2px;
  }
}
.bookrack{
  min-height: 11rem;
  z-index: 1;
  &::after{
    content: "";
    clear: both;
    display:block;
  }
}
.booklist{
  width:100%;
  padding: 0 .4rem;
  li{
    padding: .4rem 0;
    border-bottom:1px solid #eee;
    a{
      display: block;
      &::after{
        content: "";
        clear: both;
        display:block;
      }
    }
  }
}
.bookcover{
  position: relative;
  height: 2.1333rem;
  width: 1.6rem;
  float: left;
  img{
    height: 100%;
    width: 100%;
  }
  &::after{
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 80%;
    bottom: 0;
    left: 10%;
    box-shadow: 0 .1rem .25rem #000;
  }
}
.bookinfos{
  float: left;
  height: 100%;
  margin-left:.5rem ;
  div{
    height: 1.0666rem;
    line-height: 1.0666rem;
    text-align: left;
  }
  .name{
    font-size: .48rem;
    font-weight: bold;
    color: #333;
  }
  .new-chapter{
    font-size: .4rem;
    color: #888;
  }
}
.lication-main .header i{font-size: .48rem!important;}
</style>
<template>
  <div class="lication-main" @scroll="scl()" ref="main">
    <Header :rgba="rgba">
      <span slot="center-tit">主页</span>
      <div class="link-right" slot="right-icon">
        <router-link to="/Usercenter">
          <i class="iconfont" style="color:#fff">&#xe603;</i>
        </router-link>
      </div>
    </Header>
    <div class="banner">
      <img src="@/assets/images/banner.png" alt="">
    </div>
    <div class="bookrack">
      <ul class="booklist">
        <li v-for="(book, index) in books" :key="index">
          <router-link :to="{ name: 'details', params: { bookid: book.id }}" :book="books[index]">
            <div class="bookcover">
              <img src="@/assets/images/defaultcover.png" alt="">
            </div>
            <div class="bookinfos">
              <div class="name">{{book.name}}</div>
              <div class="new-chapter">已更新到 {{book.nestchapter}} 章</div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { getBooklist, addBook } from '@/api/api'
import Header from '@/components/Header.vue'
@Component({
  components: {
    Header
  }
})
export default class Application extends Vue {
  books: any = []
  opacity: number = 0
  act: number = 0
  rgba: string = 'rgba(64,158,255,0)'
  @Watch('opacity')
  setRgba (v: any) {
    this.rgba = 'rgba(64,158,255,' + this.opacity + ')'
  }
  async mounted () {
    this.act = parseInt(this.$route.params.act)
    let { status, data, statusText } = (await getBooklist()) as any
    if (status === 200) {
      this.books = data
      this.add()
    } else {
      this.$message.error(statusText)
    }
  }
  scl () {
    // @ts-ignore
    let scrollval = this.$refs.main.scrollTop
    this.opacity = (scrollval > 100 ? 100 : scrollval) / 100
  }
  async add () {
    let { status, data, statusText } = (await addBook({ id: '1', name: 'book' })) as any
    if (status === 200) {} else {
      this.$message.error(statusText)
    }
  }
}
</script>
