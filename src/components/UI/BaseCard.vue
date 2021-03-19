<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  background-color: white;
}

@media only screen and (max-width: 700px) {
  .base-card {
    max-width: 80%;
  }
}

@media only screen and (max-width: 400px) {
  .base-card {
    max-width: 22rem;
    min-width: 22rem;
  }
}
</style>