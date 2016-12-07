<template>
  <div id="app">
    <rec-books :recBooks="recos"></rec-books></br>
    <category-books class="category" :categories="categories1"></category-books>
    <category-books class="category" :categories="categories2"></category-books>
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
      recos: [],
      categories: {}
    }
  },
  created () {
    // GET /someUrl
    this.$http.get('http://localhost:7000').then((response) => {
      // success callback
      this.recos = response.body.hot
      this.categories1 = {'玄幻小说': response.body.category[0],
        '修真小说': response.body.category[1],
        '网游小说': response.body.category[2]}
      this.categories2 = {'玄幻小说': response.body.category[3],
        '修真小说': response.body.category[4],
        '网游小说': response.body.category[5]}
      console.log(response)
    }, (response) => {
      // error callback
    })
  }
}
</script>

<style lang="sass">
#app
  width: 950px
  margin: auto
  text-align: center
  .category
    width: 100%
</style>
