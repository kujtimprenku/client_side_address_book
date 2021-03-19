<template>
    <create-edit-contact @submit="onSubmit"></create-edit-contact>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CreateEditContact from '@/components/contacts/CreateEditContact.vue'
import { Contact } from '@/models/contact'

export default defineComponent({
  components: {
    CreateEditContact
  },
  methods: {
    onSubmit(contact: Contact) {
      console.log(contact)
      // this.$store.dispatch('createContact', contact)
      // this.$router.push('/contacts')
    }
  }
})
</script>
