<template>
  <div>
    <h3>最新入库小说</h3>
    <ul>
      <li v-for="book in books">
        <span class="s2"><a href="book.book_src">{{book.title}}</a></span>
        <span class="s5">{{book.author}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LatestBooks',
  props: ['books']
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
  border: 3px solid #88C6E5
  display: inline-block
  width: 28%
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
      .s5
        color: #b3b3b3
        text-align: right
        float: right
</style>