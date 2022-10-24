<template>
  <div>
    <main-nav/>
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
export default {
  name: "MainPage",
  components: {
    MainNav
  },
}
</script>

<style >
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.blocks {
  display: flex;
  justify-content: space-between;
  padding: 20px
}



</style>