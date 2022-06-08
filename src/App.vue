<template>
  <div class="app-container">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
.app-container {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
}
</style>
