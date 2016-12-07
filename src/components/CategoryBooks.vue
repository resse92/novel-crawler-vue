<template>
  <div id="categories">
    <ul>
      <li v-for="(books, category) in categories">
        <category-book :books="books" :category="category"></category-book>
      </li>
    </ul>
  </div>
</template>

<script>
import CategoryBook from './CategoryBook'
export default {
  name: 'CategoryBooks',
  props: ['categories'],
  components: {
    CategoryBook
  }
}
</script>

<style lang="stylus" scoped>
blueColor = #93C2C0
*
  padding: 0px
  margin: 0px
  float: left
  overflow: hidden
div#categories
  padding: 3px
  width: 950px
  border-style: solid
  border-color blueColor
  border-width: 2px
  ul
    list-style: none outside none
    width: 100%
    li
      width: 33.25%
      line-height: 26px
    li:nth-child(1), li:nth-child(2)
      border-right-color: blueColor
      border-right-style: dotted
      border-right-width: 1px

</style>