<template>
  <div id="nav-top">
    <p>
      <a href="/">首页></a>
      <p>{{ categoryname }}</p>
      <p>>列表</p>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'CategoryTop',
    props: ['categoryname']
  }
</script>

<style lang="stylus" scoped>
#nav-top
  display: flex
  width: 980px
  border: 2px solid gray
  padding: 10px
  margin: 10px 0 10px 0
  border-radius: 5px
  a
    style: none
  p
    display: inline
    font-size: 18px
</style>