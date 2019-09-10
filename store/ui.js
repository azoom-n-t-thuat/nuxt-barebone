import { make } from 'vuex-pathify'

export const state = () => ({
  areasStaffs: {
    isShow: false
  }
})

export const mutations = {
  ...make.mutations(state)
}

export const actions = {
  ...make.actions(state)
}
