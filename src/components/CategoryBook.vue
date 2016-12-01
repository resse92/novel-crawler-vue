<template>
  <div id="app">
    <ul class="recommend" >
      <li v-for="item in recommends">
        <rec-book :rec="item"></rec-book>
      </li>
    </ul>
    <ul class="normal">
      <li v-for="normal in normals">
        <a class="normal-a" href="#">{{ normal }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import RecBook from './RecBook'

export default {
  name: 'CategoryBook',
  // 用来让上层给子组件传递数据,主动修改不会影响上层组件
  props: ['books'],
  // 告诉vue当前页面用到哪些组件
  components: {
    RecBook
  }
}
</script>

<style lang="stylus">
*
  padding: 0
.normal-a
  padding: 10px
</style>
