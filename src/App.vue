<template>
  <div id="app">
    <rec-books :recBooks="recos"></rec-books></br>
    <category-books class="category" :categories="categories"></category-books>
  </div>
</template>

<script>
import RecBooks from './components/RecBooks'
import CategoryBooks from './components/CategoryBooks'

const VueResource = require('vue-resource')
const Vue = require('vue')
Vue.use(VueResource)

export default {
  name: 'app',
  components: {
    CategoryBooks,
    RecBooks
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
      }, {
        'title': '我好',
        'cover': 'http://h.hiphotos.baidu.com/zhidao/pic/item/0eb30f2442a7d9334f268ca9a84bd11372f00159.jpg',
        'intro': '很好',
        'author': '我'
      }, {
        'title': '我好',
        'cover': 'http://h.hiphotos.baidu.com/zhidao/pic/item/0eb30f2442a7d9334f268ca9a84bd11372f00159.jpg',
        'intro': '很好',
        'author': '我'
      }],
      categories: {
        '玄幻': [{
          src: '#',
          name: '哈哈',
          author: '西红柿'
        }, {
          src: '#',
          name: '哈哈',
          author: '西红柿'
        }, {
          src: '#',
          name: '哈哈',
          author: '西红柿'
        }],
        '武侠': [{
          src: '#',
          name: '嘻嘻',
          author: '土豆'
        }, {
          src: '#',
          name: '哈哈',
          author: '西红柿'
        }, {
          src: '#',
          name: '哈哈',
          author: '西红柿'
        }],
        '修真': [{
          src: '#',
          name: '嘿嘿',
          author: '山药'
        }, {
          src: '#',
          name: '哈哈',
          author: '西红柿'
        }, {
          src: '#',
          name: '哈哈',
          author: '西红柿'
        }, {
          src: '#',
          name: '哈哈',
          author: '西红柿'
        }]
      }
    }
  },
  created () {
    // GET /someUrl
    this.$http.get('http://localhost:7000').then((response) => {
      // success callback
      this.recos = response.body.hot
      console.log(response)
    }, (response) => {
      // error callback
    })
  }
}
</script>

<style lang="sass">
.category
  width: 950px
</style>
