<template>
  <the-header title="Client Side Address Book"></the-header>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader  from '@/components/layouts/TheHeader.vue'

export default defineComponent({
  components: {
    'the-header': TheHeader
  }
})
</script>

<style>@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  background-color: #29303B;
}
</style>
