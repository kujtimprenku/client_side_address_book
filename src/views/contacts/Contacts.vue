<template>
  <div class="contacts">
    <list-contacts></list-contacts>
  </div>
</template>

<script lang="ts">
import ListContacts from '@/components/contacts/ListContacts.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { ListContacts },
  name: 'Contacts',

  mounted () {
    if (this.$store.getters.contacts.length === 0) {
      this.$store.dispatch('setContacts')
    }
  }
});
</script>
