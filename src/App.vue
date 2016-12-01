<template>
  <div id="app">
    <category-book :books="books"></category-book>
  </div>
</template>

<script>
import CategoryBook from './components/CategoryBook'

export default {
  name: 'app',
  components: {
    CategoryBook
  },
  data () {
    return {
      recos: [{
        'title': '你好',
        'cover': 'http://h.hiphotos.baidu.com/zhidao/pic/item/0eb30f2442a7d9334f268ca9a84bd11372f00159.jpg',
        'intro': '不好',
        'author': '你'
      }, {
        'title': '我好',
        'cover': 'http://h.hiphotos.baidu.com/zhidao/pic/item/0eb30f2442a7d9334f268ca9a84bd11372f00159.jpg',
        'intro': '很好',
        'author': '我'
      }],
      normals: ['木哈哈', '哈哈哈', '嘿嘿嘿']
    }
  }
}
</script>

<style lang="sass">

</style>
