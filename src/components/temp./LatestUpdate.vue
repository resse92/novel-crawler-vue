<template>
  <div id="latestupdate">
    <h3>最近更新小说列表</h3>
    <ul>
      <li v-for="update in updates">
        <span class="s1">{{update.category}}</span>
        <span class="s2"><a :href="update.book_src">{{update.title}}</a></span>
        <span class="s3"><a :href="update.chapter_src">{{update.chapter}}</a></span>
        <span class="s4">{{update.author}}</span>
        <span class="s5">{{update.date}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LatestUpdate',
  props: ['updates']
}
</script>

<style lang="stylus" scoped>
span
  display: inline-block
  overflow: hidden
  height: 25px
a
  color: #6F78A7
  text-decoration: none
a:hover
  text-decoration: underline
div
  width: 70%
  border: 3px solid #88C6E5
  display: inline-block
  h3
    padding: 5px 0 0 0
    text-align: left
    font-size: 14px
    height: 30px
    line-height: 30px
    border-bottom: solid 1px #DDDDDD
    font-weight: bold
    padding-top: 5px
    background-color: #a6d3e8
  ul
    padding: 10px
    font-size: 12px
    li
      list-style: none outside none
      line-height: 25px
      height: 25px
      display: list-item
      text-align: left
      border-bottom: 1px solid #DDDDDD
      overflow: hidden
      .s1
        width: 75px
      .s2
        width: 165px
      .s3
        width: 300px
      .s4
        width: 90px
        color: #b3b3b3
      .s5
        width: 35px
        color: #b3b3b3
</style>