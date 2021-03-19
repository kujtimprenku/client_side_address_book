<template>
  <button :class="mode"> 
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['mode']
})
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

  /* button:hover,
  button:active {
    background-color: #270041;
    border-color: #270041;
  } */

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}
.round {
  border-radius: 20px;
}

.gray {
  color: black;
  background: #dcd9d9;
}
.red {
  color: red;
}
.flat:hover,
.flat:active {
  background-color: #efeaea;
}

.round:hover,
.round:active {
  background-color: #efeaea;
}

@media only screen and (max-width: 700px) {
  button {
    padding: 0.50rem 1rem;
  }
}
</style>
