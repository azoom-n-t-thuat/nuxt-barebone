import pathify, { make } from 'vuex-pathify'

export const plugins = [pathify.plugin]

export const state = () => ({})

export const mutations = {
  ...make.mutations(state)
}

export const actions = {
  ...make.actions(state)
}
