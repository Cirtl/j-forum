<template>
    <div class="topic-box">
        <a-badge :count="commentCount" status="default" title="回复数">
            <TitleLink
                class="topic-title"
                :title="title" 
                :topic-id="topicId"/>
        </a-badge>
        <div class="topic-content">
            {{real_content}}
        </div>
        <div v-if="links.length > 0" class="topic-images">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="link in links" :key="link">
                    <a-image fit="contain" :src="link"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="topic-owner">
            <UserOutlined />
            <UserName style="margin-right: 20px; display: inline" :username="username" :email="email" />
            <label style="margin-right: 20px">浏览量: {{browseCount}}</label>
            <label style="float:right">{{time}}</label>
        </div>
    </div>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue'
import TitleLink from '@/components/topic/TitleLink'
import UserName from '@/components/UserName'
import { extractImages } from '@/utils/image'
export default {
    components: {
        UserOutlined,
        TitleLink,
        UserName
    },
    props: {
        topicId: Number,
        title: String,
        content: String,
        commentCount: Number,
        browseCount: Number,
        userId: Number,
        username: String,
        email: String,
        time: String
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
.topic-box {
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
.topic-title {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}
.topic-title:hover {
    color: #005097;
    text-decoration:underline;
}
.topic-content {
    font-size: 15px;
}
.topic-owner {
    display: inline;
    color: gray;
}
</style>