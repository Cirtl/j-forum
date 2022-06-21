<template>
    <div class="comment_box">
        <el-row :gutter="20">
            <el-col :span="2">
                <div class="owner_img">
                    <UserOutlined v-if="avatar === null" style="font-size: 30px" />
                    <a-image v-else :src="avatar" style="width: 100%;" />
                </div>
            </el-col>
            <el-col :span="18">
                <el-row>
                    <el-col :span="24">
                        <UserName style="font-size:15px; height: 23px" :username="username" :email="email"/>
                        <div style="font-size: 10px; height: 18px; color: gray">{{floor + "楼 " + commentTime}}</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        {{content}}
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-divider/>
    </div>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue'
import UserName from '@/components/UserName'
export default {
    components: {
        UserOutlined,
        UserName
    },
    props: {
        avatar: String,
        username: String,
        email: String,
        commentTime: String,
        content: String,
        floor: Number  
    }
}
</script>

<style>
.comment_box {
    width: 100%;
}
.owner_img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
</style>