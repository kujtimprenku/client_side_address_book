<template>
    <base-card  v-if="contact === undefined">
      <div class="no-results">
        <h3>No contact found with ID: {{$route.params.id }}</h3>
        <base-button @click="$router.push('/contacts')">Contact List</base-button>
      </div>
    </base-card>
    <create-edit-contact v-else @submit="onSubmit" :contact="contact"></create-edit-contact>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CreateEditContact from '@/components/contacts/CreateEditContact.vue'
import { Contact } from '@/models/contact'

interface State  {
  contact: Contact
}

export default defineComponent({
  components: {
    CreateEditContact
  },
  data (): State {
    return {
      contact: this.$store.getters.getContactById(+this.$route.params.id)
    }
  },
  methods: {
    onSubmit(contact: Contact) {
      this.$store.dispatch('updateContact', contact)
      this.$router.push('/contacts')
    }
  },
  created () {
    console.log(this.contact)
  }
})
</script>
