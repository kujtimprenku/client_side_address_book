<template>
  <div class="home">
    <list-contacts></list-contacts>
  </div>
</template>

<script lang="ts">
import ListContacts from '@/components/contacts/ListContacts.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { ListContacts },
  name: 'Home',

});
</script>
