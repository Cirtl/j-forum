<template>
  <div class="form-bg">
    <div class="form-box">
      <el-row>
        <el-image class="logo" :src="require('@/assets/logo.png')" @click="backIndex"/>
        <label class="title" @click="backIndex">J-论坛</label>
      </el-row>
      <div class="divider"/>
      <el-row>
        <el-col :span="20">
          <router-view />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AuthLayout',
    methods: {
      backIndex() {
        this.$router.push('/')
      }
    }
}
</script>

<style scoped>
.form-bg {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/bg-3.png');
    background-color: aliceblue;
    background-size: 100% auto;
}
.form-box {
  width: 40vw;
  height: auto;
  margin-top: 10vh;
  padding-top: 20px;
  padding-left: 100px;
  float: right;
  display: block;
  background-color: rgba(255, 255, 255, 0.6);
}
.logo {
  width: 80px;
  cursor: pointer !important;
}
.title {
  font-size: 30px;
  font-weight: bold;
  margin: 20px 10px;
  cursor: pointer;
}
.divider {
  width: 80%;
  margin-top: 10px;
  margin-left: 20px;
  border-top: 2px solid #ccc;
}
</style>