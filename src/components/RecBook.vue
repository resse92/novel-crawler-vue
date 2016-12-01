<template>
  <div class="hello">
      <img :src=rec.cover alt="" class="cover"></img>
      <span id="info">
        <h3 id="title"> {{ rec.title }} </h3></br>
        <span id="author">{{ rec.author }}</span></br>
        <span id="intro">{{ rec.intro }}</span>
      </span>
  </div>
</template>

<script>
export default {
  name: 'RecBook',
  props: {
    rec: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      title: 'no msg'
    }
  }
}
</script>

<style lang="stylus">
*
  margin: 0
  padding: 0
  float: left
.hello
  display: inline
  overflow: hidden
  margin: 10px
.cover
  height: 100px
  width: 80px

#info
  height: 100px
  background-color: #129999
  display: inline-block
  h3
    display: inline
    background-color: #123456
    padding-top: 0px
    margin-top: 0px

</style>
