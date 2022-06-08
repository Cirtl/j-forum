<template>
    <SearchBox/>
    <el-row :gutter="10" class="menu-box" >
        <el-col :span="16">
            <el-tabs type="border-card"
                v-model="currentCategory">
                <el-tab-pane v-for="(item, index) in allCategories" :key="index" :name="item" :label="item">
                    <TopicIndex
                        :topic-id="topic.id"
                        :title="topic.title"
                        :content="topic.content"
                        :comment-count="topic.comment_count"
                        :user-id="topic.topic_user_id"
                        :username="topic.topic_user.username"/>
                    <TopicIndex
                        :topic-id="topic.id"
                        :title="topic.title"
                        :content="topic.content"
                        :comment-count="topic.comment_count"
                        :user-id="topic.topic_user_id"
                        :username="topic.topic_user.username"/>
                    <TopicIndex
                        :topic-id="topic.id"
                        :title="topic.title"
                        :content="topic.content"
                        :comment-count="topic.comment_count"
                        :user-id="topic.topic_user_id"
                        :username="topic.topic_user.username"/>
                </el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col :span="8">
            <a-affix :offset-top="70">
                <HotTopics :topics="topics"/>
            </a-affix>
        </el-col>
    </el-row>
    <a-affix :offset-bottom="10">
        <a-button size="large" type="primary">
            <template #icon><EditOutlined /></template>
            发布帖子
        </a-button>
    </a-affix>
</template>

<script>
import { UserOutlined, FireOutlined, FireFilled, EditOutlined } from '@ant-design/icons-vue'
import SearchBox from '@/components/SearchBox'
import TopicIndex from '@/components/TopicIndex'
import HotTopics from '@/components/HotTopics'
export default {
    components: {
        UserOutlined, FireOutlined, FireFilled, EditOutlined,
        SearchBox,
        TopicIndex,
        HotTopics
    },
    data() {
        return {
            allCategories: [
                '知识',
                '资讯',
                '生活',
                '娱乐'
            ],
            currentCategory: '知识',
            activeName: 'second',
            topic: {
                id: 1,
                title: "Test Title",
                content: "This is a content. 中文测试啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
                comment_count: 12,
                status: 0,
                topic_user_id: 3,
                topic_user: {
                    id: 3,
                    email: "3@qq.com",
                    password: "234567",
                    username: "chen"
                },
                topic_category: "测试",
                browse_count: 0, //浏览量
                thumbs_up: 0 // 点赞数
            },
            topics: [
                {
                    id: 1,
                    title: "Test Title",
                    content: "This is a content. 中文测试啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
                    comment_count: 12,
                    status: 0,
                    topic_user_id: 3,
                    topic_user: {
                        id: 3,
                        email: "3@qq.com",
                        password: "234567",
                        username: "chen"
                    },
                    topic_category: "测试",
                    browse_count: 0, //浏览量
                    thumbs_up: 0 // 点赞数
                },
                {
                    id: 1,
                    title: "Test Title",
                    content: "This is a content. 中文测试啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
                    comment_count: 12,
                    status: 0,
                    topic_user_id: 3,
                    topic_user: {
                        id: 3,
                        email: "3@qq.com",
                        password: "234567",
                        username: "chen"
                    },
                    topic_category: "测试",
                    browse_count: 0, //浏览量
                    thumbs_up: 0 // 点赞数
                }
            ]
        }
    }
}
</script>

<style scoped>
.menu-box {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>