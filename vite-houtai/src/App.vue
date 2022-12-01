<template>
  <div>
    <!-- <button @click="router">btn</button> -->
    <!-- <router-link to="/router">router</router-link>
    <router-link to="/user">user</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeMount() {
    this.$router.push("/user");
  },
};
</script>

<style scoped>
body{
  width:100vw;
  height:100vh;
  /* overflow: hidden; */
}
</style>
