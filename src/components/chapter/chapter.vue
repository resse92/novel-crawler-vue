<template>
  <div class="container">
    <chaptertop class="chapter-top" :bookName="bookName" :chapterTitle="chapterTitle" v-on:updateState="updateStyle"></chaptertop>
    <h1>{{chapterTitle}}</h1>
    <div class="buttons">
      <a href="#">上一章</a>
      <a href="#">章节列表</a>
      <a href="#">下一章</a>
    </div>
    <p v-html="chapterContent" v-bind:style="style"></p>
  </div>
</template>

<script>
import chaptertop from './chapter_top'
export default {
  name: 'chapter',
  components: {
    chaptertop
  },
  data () {
    return {
      bookName: '盘龙',
      chapterTitle: '',
      chapterContent: '',
      style: {}
    }
  },
  created () {
    this.bookName = this.$route.params.bookname
    let route = this.$route.params.category + '/' + this.$route.params.index + '/' + this.$route.params.chapter
    this.$http.get('http://localhost:7000/book/' + route).then((res) => {
      this.chapterTitle = res.body.title
      this.chapterContent = res.body.content
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    updateStyle: function (p) {
      this.style = p
      window.backgroundColor
    }
  }
}
</script>

<style lang="stylus" scoped>
div.container
  display: flex
  flex-direction: column
  border: 2px solid #88C6E5
  h1
    font-size: 26px
    font-style: bold
    margin: 15px
  div.buttons
    display: flex
    flex-direction: row
    justify-content: center
    padding-bottom: 15px
    width: 100%
    align-self: stretch
    border-bottom: 1px dotted #77B1B4
    a
      margin: 0 10px 0 10px
      text-decoration: none
      color: #085308
      cursor: auto
  p
    line-height: 150%
    margin: 20px
    letter-spacing: 0.2em
    color: rgb(85, 85, 85)
    font-family: '方正启体简体, "Microsoft YaHei", 微软雅黑, 宋体'
    text-align: left
    align-self: center
</style>