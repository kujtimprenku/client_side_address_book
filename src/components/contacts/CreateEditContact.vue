<template>
  <base-card>  
    <h2>{{ modeText }}</h2>
    <form ref="form" @submit.prevent="onSave">
      <div class="form-control">
        <label for="firstname">First Name</label>
        <input id="firstname" type="text" name="firstname" v-model="editedContact.firstname" @blur="v$.editedContact.firstname.$touch()">
        <span v-if="v$.editedContact.firstname.$dirty && v$.editedContact.firstname.$invalid" class="error">
          {{ v$.editedContact.firstname.$errors[0].$message }}
        </span>
      </div>
      <div class="form-control">
        <label for="lastname">Last Name</label>
        <input id="lastname" type="text" name="lastname" v-model="editedContact.lastname" @blur="v$.editedContact.lastname.$touch()">
        <span v-if="v$.editedContact.lastname.$dirty && v$.editedContact.lastname.$invalid" class="error">
          {{ v$.editedContact.lastname.$errors[0].$message }}
        </span>
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input id="email" type="text" name="email" v-model="editedContact.email" @blur="v$.editedContact.email.$touch()">
        <span v-if="v$.editedContact.email.$dirty && v$.editedContact.email.$invalid" class="error">
          {{ v$.editedContact.email.$errors[0].$message }}
        </span>
      </div>
      <div class="form-control">
        <label for="country">Country</label>
        <select v-model="editedContact.country" id="country" name="country" @blur="v$.editedContact.country.$touch()">
          <option disabled value="">Please select one</option>
          <option v-for="country in countries" :key="country">{{ country }}</option>
        </select>
        <span v-if="v$.editedContact.country.$dirty && v$.editedContact.country.$invalid" class="error">
          {{ v$.editedContact.country.$errors[0].$message }}
        </span>
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
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'


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
  validations () {
    return {
      editedContact: {
        firstname: { required },
        lastname: { required },
        email: { required, email },
        country: { required },
      }
    }
  },
  setup: () => ({ v$: useVuelidate() }),
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
      this.v$.$touch()
      if (!this.v$.$invalid) {
        this.$emit('submit', this.editedContact)
        this.v$.$reset()
        }
      },
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