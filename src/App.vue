<template>
  <div id="app" v-bind:style="background">
    <Navigation id="nav"></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Navigation
  },
  computed: mapState({
    background: state => state.backgroundColor
  })
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
