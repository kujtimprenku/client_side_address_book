import { Contact } from '@/models/contact'
import { createStore } from 'vuex'

export type State = { contacts: Contact[] }

const state: State = { contacts: []}

export const store = createStore({
  state,
  mutations: {
    SET_CONTACTS (state, contacts: Contact[]) {
      state.contacts = contacts
    },
  },
  actions: {
    setContacts ({ commit }) {
      const tempContacts: Contact[] = [{
        id: new Date().getTime(),
        firstname: 'Kujtim',
        lastname: 'Prenku',
        email: 'prenkukujtim.kp@gmail.com',
        country: 'Albania'
      }]
    commit('SET_CONTACTS', tempContacts)
  }
  },
  modules: {
  }
})
