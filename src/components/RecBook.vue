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
      default () {
        return {
          title: '哈哈',
          cover: 'http://h.hiphotos.baidu.com/zhidao/pic/item/0eb30f2442a7d9334f268ca9a84bd11372f00159.jpg',
          intro: 'just test'
        }
      }
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
  float: left
.hello
  display: inline
  overflow: hidden
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
