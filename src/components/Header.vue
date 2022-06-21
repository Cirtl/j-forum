<template>
    <div class="head-container">
        <el-image class="logo" :src="require('@/assets/logo.png')" @click="toIndex()"/>

        <div class="user-box">
            <el-dropdown v-if="logined">
                <a-avatar style="margin:10px auto" :size="50">
                    <template #icon>
                        <UserOutlined />
                    </template>
                </a-avatar>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="infoshow=true">
                            个人信息
                        </el-dropdown-item>
                        <el-dropdown-item :divided="true" @click="logout()">
                            <span style="color: red">退出登录</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

            <a-button
                v-else
                style="margin:15px auto" 
                shape="round" size="large" type="primary" ghost
                @click="toLogin()">
                去登陆
            </a-button>
        </div>

        <el-dialog v-model="infoshow">
            <el-descriptions
                title="个人信息"
                :column="1"
                size="large">
                <el-descriptions-item label="Username">{{username}}</el-descriptions-item>
                <el-descriptions-item label="Email">{{email}}</el-descriptions-item>
            </el-descriptions>
        </el-dialog>
    </div>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue'
import { isLogin } from '@/utils/auth'
export default {
    components: {
        UserOutlined
    },
    mounted() {
        this.logined = isLogin()
    },
    computed: {
        username() {
            return this.$store.state.user.username
        },
        email() {
            return this.$store.state.user.email
        }
    },
    data() {
        return {
            logined: false,
            infoshow: false,
        }
    },
    methods: {
        toIndex() {
            this.$router.push('/')
        },
        toLogin() {
            this.$router.push('/auth/sign-in')
        },
        logout() {
            this.$store.dispatch('user/logout')
            this.logined = false
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
.menu-title {
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
}
</style>