<template>
  <div class="books">
    <ul>
      <li v-for="recbook in recBooks">
        <a href="#">
          <rec-book :rec="recbook"></rec-book>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import RecBook from './RecBook'

export default {
  name: 'RecBooks',
  props: ['recBooks'],
  components: {RecBook}
}
</script>

<style lang="stylus" scoped>
*
  padding: 0px
  margin: 0px
  overflow: none
  float: left
.books
  border-width: 2px
  border-style: solid
  border-color: #93C2C0

  padding: 10px
  width: 720px
  ul
    list-style-type: none
    float: left
    li:hover
      background: #EEEEEE
</style>