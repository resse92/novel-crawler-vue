<template>
  <div id="app">
    <ul class="recommend" >
      <li v-for="item in recommends">
        <rec-book :rec=item></rec-book>
      </li>
    </ul>
  </div>
</template>

<script>
import RecBook from './RecBook'

export default {
  name: 'CategoryBook',
  // 用来让上层给子组件传递数据,主动修改不会影响上层组件
  props: ['recommends'],
  // 告诉vue当前页面用到哪些组件
  components: {
    RecBook
  }
}
</script>

<style lang="sass">

</style>
