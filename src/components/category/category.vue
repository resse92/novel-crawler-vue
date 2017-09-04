<template>
    <div id="category">
      <CategoryTop :categoryname="categoryname"></CategoryTop>
      <ul class="category-book-ul">
        <li class="category-book-li" v-for="book in books">
          <OneBook :book="book"></OneBook>
        </li>
      </ul>
      <CategoryBottom :totalcount="totalcount"></CategoryBottom> 
    </div>
</template>

<script>
import CategoryTop from './category_top'
import CategoryBottom from './category_bottom'
import OneBook from './category_one_book'

export default {
  name: 'category',
  components: {
    CategoryTop,
    CategoryBottom,
    OneBook
  },
  data: function () { // data必须是函数
    return {
      category: 'you tell me',
      books: [],
      totalcount: 1
    }
  },
  computed: {
    categoryname: function () {
      let n = this.$route.params.category
      this.getPageData()
      if (n === 'xuanhuan') {
        return '玄幻'
      } else if (n === 'xiuzhen') {
        return '修真'
      } else if (n === 'dushi') {
        return '都市'
      } else if (n === 'chuanyue') {
        return '穿越'
      } else if (n === 'wangyou') {
        return '网游'
      } else if (n === 'kehuan') {
        return '科幻'
      }
      return ''
    }
  },
  created: function () {
    this.getPageData()
  },
  methods: {
    getPageData () {
      this.$http.get(process.env.API + 'crawler/' + this.$route.params.category + '/' + this.$route.params.index).then((res) => {
        let books = res.body.books
        for (let book in books) {
          if (books.hasOwnProperty(book)) {
            let element = books[book]
            element.link = element.link.replace('http://www.37zw.net', '/book')
            // console.log(element)
            books[book] = element
          }
        }
        console.log(books)
        this.books = books
        this.totalcount = parseInt(res.body.totalcount)
      }).catch((err) => {
        // 错误
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
#category
  widht: 100%
  .category-book-ul
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    .category-book-li
      width: 31%
      margin: 8px
</style>