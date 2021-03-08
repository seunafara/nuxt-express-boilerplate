<template>
  <div @click.prevent="$router.push('/')" class="as-menn-logo">
    <h2 v-if="authenticated && user">Hi, {{ user.full_name }}</h2>
    <h2 v-else>MENN</h2>
  </div>
</template>

<style scoped>
.as-menn-logo {
  color: black;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}

.as-menn-logo h2 {
  font-family: "Stick", sans-serif;
}
</style>
