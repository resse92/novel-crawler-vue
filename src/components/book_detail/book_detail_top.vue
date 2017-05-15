<template>
  <div id="book-detail-info">
    <div id="top-bar">
      三七中文 > 玄幻小说 > {{bookInfo.title}}最新章节列表
    </div>
    <div id="book-info">
      <img :src="bookInfo.cover" alt="">
      <div id="book-main-info">
        <h1>{{bookInfo.title}}</h1>
        <div id="info">
          <p>{{bookInfo.author}}</p>
          <p>动作: <a href="#">加入书架</a>,<a href="#">投推荐票</a>,<a href="#">直达底部</a></p>
          <p>{{bookInfo.latest_update_time}}</p>
          <p>{{bookInfo.latest_update_chapter}}</p>
        </div>
        <div class="divider"></div>
        <p id="book-intro">
          {{bookInfo.intro}} </br>
          各位书友要是觉得《{{bookInfo.title}}》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！
        </p>
      </div>
    </div>
    <div id="book-detail-recommends">
        &nbsp;推荐阅读：<a v-for="{book, link} in bookInfo.recommends" :href="'/book' + link">{{book}}、</a>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'book_detail_top',
    props: ['bookInfo']
  }
</script>

<style lang="stylus" scoped>
#book-detail-info
  display: block
  text-align: left
  font-size: 15px
  border: solid 2px #88C6E5
  #top-bar
    height: 40px
    background-color: #E1ECED
    display: flex
    align-items: center
    padding-left: 10px
  #book-info
    display: flex
    margin: 10px
    align-items: flex-start
    #book-main-info
      margin-left: 30px
      h1
        font-size: 28px
        font-weight: 700
        font-family: '黑体'
        text-align: left
      img
        // flex-basis: 120px
        height: 150px
        width: 120px
      #info
        margin-top: 10px
        text-align: left
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        p
          width: 50%
          height: 25px
      p#book-intro
        line-height: 150%
        font-size: 14px
        text-indent: 2em
        border-top: 1px dashed #88C6E5
        padding-top: 5px
#book-detail-recommends
  margin: 8px
  font-size: 12px
  text-decoration: none
  line-height: 150%
a
  color: rgb(111, 120, 167)
a:visited
  color: rgb(111, 120, 167)
</style>