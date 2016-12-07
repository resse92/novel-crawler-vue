<template>
  <div class="hello">
      <img :src=rec.cover alt="" class="cover"></img>
      <span id="info">
        <h3 id="title"> {{ rec.title }} </h3>
        <span id="author">{{ rec.author }}</span></br>
        <div></div></br>
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

<style lang="stylus" scoped>
totalHeight = 150px
fontSize14 = 14px
rightWidth = 190px

*
  margin: 0
  padding: 0
  float: left
.hello
  display: inline
  overflow: hidden
  margin: 10px
.cover
  height: totalHeight
  width: 120px
  border: 1px
  padding: 1px
#info
  padding: 3px
  height: totalHeight
  width: rightWidth
  display: inline-block
  margin-left: 15px
  div
    margin-top: 5px
    border-bottom-color: green
    border-bottom-style: dotted
    border-bottom-width: 1px
    width: rightWidth
  h3
    display: inline
    padding-top: 0px
    font-size: fontSize14
  #author
    float: right
    font-size: fontSize14
    color: gray
  #intro
    font-size: 12px

</style>
