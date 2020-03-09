<style lang="scss" scope>
.book-list{
  min-height: 11rem;
  z-index: 1;
}
.book-list::after{
  content: "";
  clear: both;
  display:block;
}
.book-list ul{
  width:100%;
  padding: 0 .4rem;
}
.book-list ul li{
  padding: .4rem 0;
  border-bottom:1px solid #eee;
}
.book-list ul li a{
  display: block;
}
.book-list ul li a::after{
  content: "";
  clear: both;
  display:block;
}
.bookcover{
  position: relative;
  height: 2.1333rem;
  width: 1.6rem;
  float: left;
}
.bookcover img{
  height: 100%;
  width: 100%;
}
.book-list .bookcover::after{
  content: '';
  display: block;
  position: absolute;
  height: 1px;
  width: 80%;
  bottom: 0;
  left: 10%;
  box-shadow: 0 .1rem .25rem #000;
}
.book-list .bookinfos{
  float: left;
  height: 100%;
  margin-left:.5rem ;
}
.book-list .bookinfos div{
  height: .7rem;
  line-height: .7rem;
  text-align: left;
}
.book-list .bookinfos .name{
  font-size: .48rem;
  font-weight: bold;
  color: #333;
}
.book-list .bookinfos .creat-time{
  font-size: .32rem;
  color: #888;
}
.book-list .bookinfos .last-time{
  font-size: .32rem;
  color: #888;
}
</style>
<template>
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
</template>
<script>
export default {
  props: {
    books: Array
  }
};
</script>
