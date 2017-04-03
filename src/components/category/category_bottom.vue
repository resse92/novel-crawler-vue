<template>
  <div id="category-bottom">
    <b class="category-bottom-group">{{currentPage}}/{{totalcount}}</b>
    <b class="category-bottom-group">1</b>
    <a class="category-bottom-group" :href="currentPath + '1'">&lt&lt</a>
    <a class="category-bottom-group" :href="currentPath + (currentPage - 1)">&lt</a>
    <a class="category-bottom-group" 
       v-for="i in allPages" v-if="i !== currentPage" :href="currentPath + i" >{{i}}
    </a>
    <b class="category-bottom-group" v-else>{{currentPage}}</b>
    <a class="category-bottom-group" :href="currentPath + (currentPage + 1)">&gt</a>
    <a class="category-bottom-group" :href="currentPath + totalcount">&gt&gt</a>
  </div>
</template>

<script>
  export default {
    name: 'CategoryBottom',
    props: ['totalcount'],
    computed: {
      currentPage: function () {
        let page = this.$route.params.index
        return parseInt(page)
      },
      allPages: function () {
        let d = []
        if (this.currentPage < 5) {
          for (let i = 1; i < 10; i++) {
            d.push(i)
          }
        } else if (this.totalcount - this.currentPage <= 5) {
          for (let i = this.totalcount - 9; i <= this.totalcount; i++) {
            d.push(i)
          }
        } else {
          for (let i = this.currentPage - 4; i < this.currentPage + 5; i++) {
            d.push(i)
          }
        }
        return d
      },
      currentPath: function () {
        return 'http://localhost:8080/' + 'category/' + this.$route.params.category + '/'
      }
    },
    methods: {
      first: function () {
        this.gosome(1)
      },
      previous: function () {
        this.gosome(this.currentPage - 1)
      },
      next: function () {
        this.gosome(this.currentPage + 1)
      },
      last: function () {
        this.gosome(this.totalCount)
      },
      some: function (some) {
        this.gosome(some)
      },
      gosome: function (pageNum) {
        this.$emit('gotopage', [pageNum])
      }
    }
  }
</script>

<style lang="stylus">
#category-bottom
  display: flex
  align-items: center
  border: 2px solid gray
  border-radius: 5px
  height: 40px
.category-bottom-group
  backgroud-color: white
  border: 1px solid gray
  margin: 5px
  min-width: 20px
a
  text-decoration: none
a:hover
  backgroud-color: #999999
</style>