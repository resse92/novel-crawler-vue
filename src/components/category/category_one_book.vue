<template>
<div class="category-one-book">
  <a :href="book.link"><img :src="book.image" :alt="book.title"/></a>
  <div class="category-one-book-right">
    <div class="category-one-book-top">
      <a :href="book.link" class="category-one-book-title">{{book.title}}</a>
      <span class="category-one-book-author">{{book.author}}</span>
    </div>
    <div class="splash"></div>
    <div class="category-one-book-desc">&nbsp;&nbsp;&nbsp;&nbsp;{{book.description}}</div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'category_one_book',
    props: ['book']
  }
</script>

<style lang="stylus" scoped>
.category-one-book
  display: flex
  height: 150px
  overflow: hidden
  justify-content: space-between
  img
    width: 120px
    height: 150px
    flex: 0 0
    flex-basis: 120px
  .category-one-book-right
    text-align: left
    padding: 5px
    white-space: no-wrap
    flex: 1
    .category-one-book-top
      display: flex
      justify-content: space-between
      font-size: 14px
      width: 100%
    .category-one-book-title
      text-align: left
      color: #6F78A7
    .category-one-book-author
      text-align: right
    .category-one-book-desc
      color: gray
      font-size: 12px
      line-height: 20px
    .splash
      border: 1px dashed gray
      margin: 5px 0px 5px 0px
    
</style>