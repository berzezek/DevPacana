<template>
<div class="navbar">
  <router-link to="/">Simple</router-link>
  <router-link to="/composition">Composition</router-link>
</div>
</template>

<script>
export default {
  name: "MainNav"
}
</script>

<style scoped>
  .navbar {
    width: 100%;
    padding: 20px;
    background-color: #2c3e50;
    display: flex;
    justify-content: space-around;

  }

  a {
    color: white;
    text-decoration: none;
  }
</style>