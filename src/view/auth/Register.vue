<template>
    <div class="form">
        <div class="form-title">注册</div>
        <el-form :model="form" :rules="rules" ref="form" label-position="top" class="form">
            <el-form-item prop="email">
                <template v-slot:label>
                    <label class="line-head">邮箱</label>
                </template>
                <el-input v-model="form.email"/>
            </el-form-item>
            <el-form-item prop="password">
                <template v-slot:label>
                    <label class="line-head">密码</label>
                </template>
                <el-input v-model="form.password" show-password/>
            </el-form-item>
            <el-form-item prop="password_ch">
                <template v-slot:label>
                    <label class="line-head">确认密码</label>
                </template>
                <el-input v-model="form.password_ch" show-password/>
            </el-form-item>
            <el-form-item size="large">
                <el-row style="width: 100%;" :gutter="20">
                    <el-col :span="10">
                        <el-button type="primary" size="large" @click="register()">注册</el-button>
                    </el-col>
                    <el-col :span="10">
                        <el-button type="primary" size="large" @click="gotoLogin()">去登陆</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        var chPass = (rule, value, callback) => {
            this.$refs.form.validateField('password_ch');
        }
        var chPass2 = (rule, value, callback) => {
            if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            form: {
                email: '',
                password: '',
                password_ch: ''
            },
            rules: {
                email: [
                    {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                    {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '密码长度在6到20个字符之间', trigger: ['blur', 'change']},
                    {validator: chPass, trigger: 'change'}
                ],
                password_ch: [
                    {required: true, message: '请再次输入密码', trigger: 'blur'},
                    {validator: chPass2, trigger: ['blur', 'change']}
                ]
            }
        }
    },
    methods: {
        register() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        gotoLogin() {
            this.$router.push('/auth/sign-in')
        }
    }
}
</script>

<style>
.form {
    padding: 10px;
    width: 450px;
}
.form-title {
    margin-top: 5px;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    width: 90%;
}
.line-head {
    font-size: 18px;
}
</style>