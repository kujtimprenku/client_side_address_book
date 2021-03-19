<template>
  <ul>
    <base-card v-if="contacts.length === 0">
      <div class="no-results">
        <h3>No contacts found, please add a new contact.</h3>
      </div>
    </base-card>
    <item-contact v-for="contact in contacts" :key="contact.id" :contact="contact"></item-contact>
  </ul>
</template>

<script lang="ts">
import { Contact } from '@/models/contact'
import { defineComponent } from 'vue'
import ItemContact from './ItemContact.vue'

export default defineComponent({
  components: { ItemContact },
  computed: {
    contacts (): Contact[] {
      // return  this.$store.state.contacts;
      return []
    }
  }
})
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

.no-results {
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-results h3 {
  color: #5f5353;
}
</style>
