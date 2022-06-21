<template>
    <el-card shadow="never">
        <template #header>
            <div class="header">
                <ArrowLeftOutlined @click="back()" />
                <span class="header-text">搜索结果</span>
            </div>
            <el-empty v-if="topics === null" description="还没有相关帖子哦, 来发一条吧"/>
            <TopicItem
                v-else
                v-for="topic in topics"
                :key="topic.id"
                :topic-id="topic.id"
                :title="topic.title"
                :content="topic.content"
                :comment-count="topic.comment_count"
                :browse-count="topic.browse_count"
                :user-id="topic.topic_user_id"
                :username="topic.topic_user.username"
                :email="topic.topic_user.email"
                :time="topic.topic_time"/>
        </template>
    </el-card>
</template>

<script>
import { ArrowLeftOutlined } from "@ant-design/icons-vue"
import TopicItem from '@/components/topic/TopicItem'
export default {
    components: {
        ArrowLeftOutlined,
        TopicItem
    },
    mounted() {
        this.findTopics()
    },
    data() {
        return {
            topics: null,
        }
    },
    watch: {
        $route: {
            handler(val){
                if (val.path == '/search') {
                    this.findTopics()
                }
            },
            deep: true
        }
    },
    methods: {
        back() {
            this.$router.push('/')
        },
        findTopics() {
            let title = this.$route.query.title
            this.$service('/topic/getByTitle', {
                title: title
            }, 'GET')
                .then(data => {
                    this.topics = data.data
                })
                .catch(err => {
                    this.topics = []
                })
        }
    }
}
</script>

<style>
.header {
    display: flex;
    align-items: center;
}
.header-text {
    font-size: 18px;
    margin-left: 5px;
}
</style>