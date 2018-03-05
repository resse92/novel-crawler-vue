<template>
  <div id="homepage">
    <rec-books :recBooks="recos"></rec-books></br>
    <category-books class="category" :categories="categories1"></category-books>
    <category-books class="category" :categories="categories2"></category-books>
    <div class="newscontent">
      <latest-update id="latestUpdate" :updates="updateBooks"></latest-update>
      <latest-book id="latestBook" :books="latestBooks"></latest-book>
    </div>
  </div>
</template>

<script>
import RecBooks from './RecBooks'
import CategoryBooks from './CategoryBooks'
import LatestUpdate from './LatestUpdate'
import LatestBook from './LatestBook'

export default {
  name: 'homepage',
  components: {
    CategoryBooks,
    RecBooks,
    LatestUpdate,
    LatestBook
  },
  data () {
    return {
      recos: [],
      categories: {},
      updateBooks: [],
      latestBooks: []
    }
  },
  created () {
    // GET /someUrl
    this.$http.get(process.env.API + 'index').then((response) => {
      // success callback
      this.recos = response.body.hot
      this.categories1 = {'玄幻小说': response.body.category[0],
        '修真小说': response.body.category[1],
        '网游小说': response.body.category[2]}
      this.categories2 = {'穿越小说': response.body.category[3],
        '都市小说': response.body.category[4],
        '科幻小说': response.body.category[5]}
      this.updateBooks = response.body.latest_update
      this.latestBooks = response.body.latest_book
      console.log(response)
    }, (response) => {
      // error callback
    })
  }
}
</script>

<style lang="sass">
#homepage
  width: 980px
  margin: auto
  text-align: center
  .category
    width: 100%
  #nav
    width: 100%
.newscontent
  float: left
  width: 100%
  display: inline-block
  text-align: left
</style>
