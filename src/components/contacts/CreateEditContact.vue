<template>
  <base-card>  
    <h2>{{ modeText }}</h2>
    <form ref="form" @submit.prevent="onSave">
      <div class="form-control">
        <label for="firstname">First Name</label>
        <input id="firstname" type="text" name="firstname" v-model="editedContact.firstname">
      </div>
      <div class="form-control">
        <label for="lastname">Last Name</label>
        <input id="lastname" type="text" name="lastname" v-model="editedContact.lastname">
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input id="email" type="text" name="email" v-model="editedContact.email">
      </div>
      <div class="form-control">
        <label for="country">Country</label>
        <select v-model="editedContact.country" id="country" name="country">
          <option disabled value="">Please select one</option>
          <option v-for="country in countries" :key="country">{{ country }}</option>
        </select>
      </div>
      <div>
        <base-button type="submit">{{ modeText }}</base-button>
      </div>
    </form>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Contact } from '@/models/contact'
import countryList from 'country-list'


interface State {
  editedContact: Contact
  countries: string[],
}

export default defineComponent({
  emits: ['submit'],
  props: {
    contact: {
      type: Contact,
      default: null,
      required: false
    }
  },
  data (): State {
    return {
      editedContact: this.contact ? { ...this.contact } : {
        id: new Date().getTime(),
        firstname: '',
        lastname: '',
        email: '',
        country: '',
      },
      countries: countryList.getNames(),
    }
  },
  computed: {
    editMode (): boolean {
      return this.$route.params.id ? true: false
    },
    modeText (): string {
      return this.editMode ? 'Edit Contact' : 'Add Contact'
    },
  },
  methods: {
    onSave (): void {
      this.$emit('submit', this.editedContact)
      }
    }
  }
);
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea,
select {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

.error {
  font-size: 13px;
  color: red;
  padding: 5px 0px;
}
</style>