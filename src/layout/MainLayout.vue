<template>
  <div class="main-bg"/>

  <div class="main-container">
    <Header class="nav-head" />

    <div class="main-box">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    name: 'MainLayout',
    components: { Header },
}
</script>

<style scoped>
.main-bg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/bg-1.png');
  background-size: 100% auto;
  background-color: aliceblue;
  z-index: -1;
}
.main-container {
  width: 100vw;
  height: auto;
}
.nav-head {
  position: fixed;
  top: 0;
  width: 100%;
  height: 10vh;
}
.main-box {
  width: 70vw;
  margin-top: 10vh;
  margin-left: 15vw;
  min-height: 90vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
}
</style>