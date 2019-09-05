import pathify from 'vuex-pathify'
import { make } from 'vuex-pathify'

export const plugins = [pathify.plugin]

export const state = () => ({
  listAreas: []
})

export const mutations = {
  ...make.mutations(state)
}

export const actions = {
  ...make.actions(state)
}
