<template>
  <div class="hello">
      <img :src=rec.cover alt="" class="cover"></img>
      <h1 id="title"> {{ rec.title }} </h1>
      <p id="author">{{ rec.author }}</p>
      <p id="intro">{{ rec.intro }}</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.cover
  height: 100px
  width: 80px
  display: inline
</style>
