<template>
  <div>
    <chaptertop :bookName="bookName" :chapterTitle="chapterTitle"></chaptertop>
  </div>
</template>

<script>
import chaptertop from './chapter_top'
export default {
  name: 'chapter',
  components: {
    chaptertop
  },
  data () {
    return {
      bookName: '盘龙',
      chapterTitle: '第一章'
    }
  },
  created () {
    this.$http.get('http://localhost:7000/book/1/1290/713828').then((res) => {
      this.bookName = res.body.title
      this.chapterTitle = res.body.title
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>