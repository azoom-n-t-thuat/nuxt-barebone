import { make } from 'vuex-pathify'

export const state = () => ({
  staff: {
    summary: {
      contactLogs: {
        needUpdatingContact: {}
      }
    }
  }
})

export const mutations = {
  ...make.mutations(state)
}

export const getters = {
  ...make.getters(state),
  getTotalItemCount: (_) => {
    return Object.values(
      _.staff.summary.contactLogs.needUpdatingContact
    ).reduce((totalCount, value) => {
      if (Number.isFinite(value)) {
        return (totalCount += value)
      }
    }, 0)
  },
  getContactLogs: (_) => {
    try {
      return _.staff.summary.contactLogs.needUpdatingContact
    } catch (e) {
      return {}
    }
  }
}

export const actions = {
  ...make.actions(state),
  getContactLogSummary(context, params = {}) {
    const res = {
      summary: {
        contactLogs: {
          needUpdatingContact: {
            receptionist: 1,
            heard: 2,
            sendAvailableMail: 3,
            sendAvailableMailDirectMng: 4,
            sendAvailableMailLeopalace: 4,
            sendFollowUpMail: 3,
            toContact: 1,
            prospects: 2,
            contractAdjustment: 2,
            reversing: 7,
            sendFollowMail: 1
          }
        }
      }
    }
    context.commit('SET_STAFF', res)
  }
}
