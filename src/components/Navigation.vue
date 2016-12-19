<template>
<div class="nav">
  <ul>
    <li><a href="/homepage">首页</a></li>
    <li><a href="/xuanhuan">玄幻小说</a></li>
    <li><a href="/xiuzhen">修真小说</a></li>
    <li><a href="/dushi">都市小说</a></li>
    <li><a href="/chuanyue">穿越小说</a></li>
    <li><a href="/wangyou">网游小说</a></li>
    <li><a href="/kehuan">科幻小说</a></li>
    <li><a href="/rank">排行榜单</a></li>
  </ul>
</div>
</template>

<script>
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