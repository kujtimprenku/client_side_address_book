<template>
  <base-dialog v-if="confirmDelete" title="Delete Contact" @close="close">
    <template #default>
      <p>Are you sure you want to delete this contact.</p>
    </template>
    <template #actions>
      <base-button @click="close()" mode="flat">Abort</base-button>
      <base-button @click="confirm(contact.id)" mode="flat red">Confirm</base-button>
    </template>
  </base-dialog>
  <li>
    <base-card>
      <header>
        <h3>{{ `${contact.firstname} ${contact.lastname}` }}</h3>
        <div>
          <base-button mode="flat" @click="$router.push(`/contacts/${contact.id}/update`)">Edit</base-button>
          <base-button mode="flat red" @click="deleteContact(contact.id)">Delete</base-button>
        </div>
      </header>
      <p>{{ contact.email }}</p>
      <p>{{ contact.country }}</p>
    </base-card>
  </li>
</template>


<script lang="ts">
import { Contact } from '@/models/contact'
import { defineComponent } from 'vue'

interface State {
  confirmDelete: boolean
}

export default defineComponent({
    props: {
    contact: {
      type: Contact,
      reqired: true
    }
  },
  data (): State {
    return {
      confirmDelete: false
    }
  },
  methods: {
    deleteContact (): void {
      this.confirmDelete = true
    },
    confirm(id: number): void {
      console.log(id)
    },
    close (): void {
      this.confirmDelete = false
    }
  }
})
</script>


<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>