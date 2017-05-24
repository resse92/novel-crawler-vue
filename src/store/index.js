import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import mutation from './mutation'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const initialState = {
  backgroundColor: {
    backgroundColor: '#FFFFFF'
  },
  speed: 4
}
export default new Vuex.Store({
  state: initialState,
  actions: action,
  mutations: mutation,
  strict: debug
})
