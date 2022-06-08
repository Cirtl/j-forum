<template>
  <el-backtop :right="100" :bottom="100" />
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
.main-container {
  width: 100%;
  height: auto;
  background-image: url('../assets/bg-1.png');
  background-size: 100% auto;
  background-color: aliceblue;
  background-attachment: fixed;
}
.nav-head {
  position: fixed;
  top: 0;
  width: 100%;
  height: 10vh;
  z-index: 99;
}
.main-box {
  width: 70vw;
  padding-top: 10vh;
  margin-left: 15vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
}
</style>