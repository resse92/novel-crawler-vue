<template>
  <div id="app" v-bind:style="background" v-on:ondblclick="doubleclick">
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
  }),
  created () {
    // document.body.offsetTop = 100
    console.log(1)
  },
  methods: {
    doubleclick (e) {
      console.log(e)
      document.body.scrollTo(0, 200)
    }
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
