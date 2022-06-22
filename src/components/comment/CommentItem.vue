<template>
    <div class="comment_box">
        <el-row :gutter="20">
            <el-col :span="2">
                <div class="owner_img">
                    <UserOutlined v-if="avatar === null" style="font-size: 30px" />
                    <el-image v-else :src="avatar" style="width: 100%;" />
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
                        {{real_content}}
                    </el-col>
                </el-row>
                <el-row v-if="links.length > 0">
                    <el-col :span="24">
                        <el-carousel :interval="5000" arrow="always">
                            <el-carousel-item v-for="link in links" :key="link">
                                <a-image fit="contain" :src="link"/>
                            </el-carousel-item>
                        </el-carousel>
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
import { extractImages } from '@/utils/image'
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
    },
    data() {
        const {real_content, links } = extractImages(this.$props.content)
        return {
            real_content: real_content,
            links: links
        }
    }
}
</script>

<style scoped>
.comment_box {
    width: 100%;
}
.owner_img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>