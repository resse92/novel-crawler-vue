<template>
<div class="nav">
  <ul>
    <li><router-link to="/">首页</router-link></li>
    <li><router-link to="/category/xuanhuan/1">玄幻小说</router-link></li>
    <li><router-link to="/category/xiuzhen/1">修真小说</router-link></li>
    <li><router-link to="/category/dushi/1">都市小说</router-link></li>
    <li><router-link to="/category/chuanyue/1">穿越小说</router-link></li>
    <li><router-link to="/category/wangyou/1">网游小说</router-link></li>
    <li><router-link to="/category/kehuan/1">科幻小说</router-link></li>
    <li><router-link to="/rank">排行榜单</router-link></li>
  </ul>
</div>
</template>

<script>
// import homepage from './components/homepage/homepage'
export default {
  name: 'Navigation'
}
</script>

<style lang="stylus">
.nav
  background-color: #88C6E5
  width: 100%
  overflow: hidden
  height: 40px
  font-weight: bold
  margin: 10px 0 10px 0;
  li
    float: left
    width: 80px
    margin: 0 20px 0 20px
    line-height 40px
    height 40px
    a
      color: white
      text-decoration: none
</style>