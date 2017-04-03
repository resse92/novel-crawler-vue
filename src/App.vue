<template>
  <div id="app">
    <Navigation id="nav"></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="sass">
@import "./css/reset.css"
#app
  width: 980px
  margin: auto
  text-align: center
  
  #nav
    width: 100%
</style>
