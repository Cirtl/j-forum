<template>
    <div class="head-container">
        <el-image class="logo" :src="require('@/assets/logo.png')" @click="toIndex()"/>

        <div class="user-box">
            <a-button
                style="margin:15px auto" 
                shape="round" size="large" type="primary" ghost
                @click="toLogin()">
                去登陆
            </a-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toIndex() {
            this.$router.push('/')
        },
        toLogin() {
            this.$router.push('/auth/sign-in')
        }
    }
}
</script>

<style scoped>
.head-container {
    width: 100%;
    display: -webkit-inline-box;
    background-color: rgba(231, 241, 255, 0.3);
    border-bottom: 1px solid #ccc;
}
.logo {
    position: absolute;
    height: 100%;
    left: 1vw;
    cursor: pointer !important;
}
.user-box {
    position: absolute;
    height: 100%;
    right: 1vw;
}
</style>