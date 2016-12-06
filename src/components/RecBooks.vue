<template>
  <div class="books">
    <ul>
      <li v-for="recbook in recBooks">
        <rec-book :rec="recbook"></rec-book>
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

<style lang="stylus">
*
  padding: 0px
  margin: 0px
.books
  border-width: 2px
  border-style: solid
  boder-color: #B2D3CF
  padding: 10px
  width: 720px
  ul
    list-style-type: none
    float: left
    li:hover
      background: #EEEEEE
</style>