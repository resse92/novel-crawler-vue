<template>
  <div id="book-detail">
    <BookDetailTop :bookInfo="bookInfo"></BookDetailTop>
    <div class="chapters">
      <BookDetailChapter v-for="collect in collects" :collect="collect" :bookname="bookInfo.title"></BookDetailChapter>
    </div>
  </div>
</template>

<script>
  import BookDetailTop from './book_detail_top'
  import BookDetailChapter from './book_detail_chapter'
  export default {
    name: 'BookDetail',
    components: {
      BookDetailTop,
      BookDetailChapter
    },
    data () {
      return {
        bookInfo: {},
        collects: []
      }
    },
    created () {
      this.$http.get('http://localhost:7000/book/' + this.$route.params.category + '/' + this.$route.params.index)
      .then((res) => {
        this.bookInfo = {
          cover: res.body.cover,
          title: res.body.title,
          author: res.body.author,
          latest_update_time: res.body.latest_update.time,
          latest_update_chapter: res.body.latest_update.name,
          intro: res.body.desc,
          recommends: res.body.recommends
        }
        this.collects = res.body.chapters
      }).catch((error) => {
        console.log(error)
      })
    }
  }
</script>

<style lang="stylus">
#book-detail
  margin-bottom: 10px
  .chapters
    border: solid 2px #88C6E5
    margin-top: 10px
    padding: 5px
</style>