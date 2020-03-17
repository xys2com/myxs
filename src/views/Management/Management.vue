<style lang="scss" scope>
  .management{
    position: relative;
    padding-top: 1.2rem;
    padding-bottom: 2rem;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
    overflow-y: scroll;
    background: #f6f6f6;
  }
  .mng-window{
    height: 100%;
    overflow-y: scroll;
    padding-bottom: .4rem;
    background: #fff;
  }
  .management .header i{color: #333!important;font-size: .48rem!important;}
  .book-list{
  min-height: 11rem;
  z-index: 1;
  &::after{
    content: "";
    clear: both;
    display:block;
  }
  ul{
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
      height: .7rem;
      line-height: .7rem;
      text-align: left;
    }
    .name{
      font-size: .48rem;
      font-weight: bold;
      color: #333;
    }
    .creat-time{
      font-size: .32rem;
      color: #888;
    }
    .last-time{
      font-size: .32rem;
      color: #888;
    }
  }
}
</style>
<template>
  <div class="management">
    <Header :rgba="'#fff'" style="box-shadow: 0 2px 5px #eee;">
      <div class="link-left" slot="left-icon" @click="back()">
        <i class="iconfont" style="color:#333">&#xe605;</i>
      </div>
      <span slot="center-tit" style="color:#333">书籍管理</span>
      <div class="link-right" slot="right-icon">
        <router-link to="/Usercenter">
          <i class="iconfont" style="color:#333">&#xe603;</i>
        </router-link>
      </div>
    </Header>
    <div class="mng-window">
      <div class="book-list">
        <ul>
          <li v-for="(book, index) in books" :key="index">
            <router-link :to="{ name: 'details', params: { bookid: book.id }}">
              <div class="bookcover">
                <img src="@/assets/images/defaultcover.png" alt="">
              </div>
              <div class="bookinfos">
                <div class="name">{{book.name}}</div>
                <div class="creat-time">创建时间：{{book.creattime}} </div>
                <div class="last-time">更新时间：{{book.lasttime}} </div>
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
import { getBooklist } from '@/api/api'
import Header from '@/components/Header.vue'
@Component({
  components: {
    Header
  }
})
export default class Management extends Vue {
  books: Array<any> = []
  back () {
    this.$router.go(-1)
  }
  async mounted () {
    let { status, data, statusText } = (await getBooklist()) as any
    if (status === 200) {
      this.books = data
    } else {
      this.$message.error(statusText)
    }
  }
}
</script>
