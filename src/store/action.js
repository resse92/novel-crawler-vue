import * as types from './mutation_types.js'

export default {
  changeBg ({ commit }, value) {
    commit(types.CHANGE_BACKGROUND, value)
  },
  changeSpeed ({ commit }, value) {
    commit(types.CHANGE_SCROLL_SPEED, value)
  }
}
