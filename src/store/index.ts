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
    CREATE_CONTACT (state, contact: Contact) {
      state.contacts.push(contact)
    },
    UPDATE_CONTACT (state, contact: Contact) {
      const index = state.contacts.findIndex(c => c.id === contact.id)
      state.contacts[index] = contact
      state.contacts = state.contacts.filter(c => c.id !== 0)
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
    },
    createContact ({ commit }, contact: Contact) {
      commit('CREATE_CONTACT', contact)
    },
    updateContact ({ commit }, contact: Contact) {
      commit('UPDATE_CONTACT', contact)
    },
  },
  modules: {
  },
  getters: {
    contacts(state: State): Contact[] {
      return state.contacts
    },
    getContactById: (state: State) => (id: number) => {
      return state.contacts.find(contact => contact.id === id)
    }
  }
})
