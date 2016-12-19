<template>
  <div id="app">
    <h3>{{category}}</h3><br>
    <ul>
      <li v-for="book in books">
        <a :href="book.src">{{book.title}}</a>{{book.author}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryBook',
  // 用来让上层给子组件传递数据,主动修改不会影响上层组件
  props: ['category', 'books']
}
</script>

<style lang="stylus" scoped>
*
  margin: 0px
  padding: 0
  float: left
  overflow: hidden
  clear: none
  font-size: 12px
  text-align: left
div#app
  border-style: none
  width: 100%
  background-color: #FEF9EF
  h3
    width: 100%
    border-bottom-color: #93C2C0
    border-bottom-width: 2px
    border-bottom-style: solid
    margin-right: 3px
    background-color: #F6F8FE
    font-weight: bold
    font-size: 14px
  ul
    margin-top: 5px
    list-style: none
    float: left
    width: 100%
    line-height: 26px
    border-style: none
    padding: 5px
    li
      color: gray
      width: 50%
      border-bottom-style: dotted 
      border-bottom-color: gray 
      border-bottom-width: 1px
      font-size: 12px
      height: 26px
      line-height: 26px
      a
        font-size: 13px
        text-decoration: none
      a:hover
        text-decoration: underline
</style>
