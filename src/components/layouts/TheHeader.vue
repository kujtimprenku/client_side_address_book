<template>
  <header>
      <h1 @click="$router.push('/contacts')">{{ title }}</h1>
      <nav id="nav">
        <base-button mode="round gray"><router-link to="/contacts/create">Add Contact</router-link></base-button>
      </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['title'],
})
</script>

<style scoped>
header {
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #8c8c8c;
}

header h1 {
  color: #dcd9d9;
  margin: 0;
  font-size: 1.5rem;
  cursor: pointer;
}

header h1:hover {
  color: white;
}
a {
  text-decoration: none;
}

a:active, a:visited {
  color: black;
}

</style>
