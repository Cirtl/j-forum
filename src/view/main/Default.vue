<template>
    <el-tabs 
        type="border-card"
        v-model="currentCategory"
        @tab-change="tabChange">
        <el-tab-pane v-loading="loading" v-for="(item, index) in allCategories" :key="index" :name="item" :label="item" :lazy="true">
            <TopicItem
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
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import TopicItem from '@/components/topic/TopicItem'
export default {
    components: {
        TopicItem
    },
    mounted() {
        this.fetchTopics(this.currentCategory)
    },
    data() {
        return {
            loading: true,
            allCategories: [
                '知识',
                '资讯',
                '生活',
                '娱乐'
            ],
            currentCategory: '知识',
            topics: []
        }
    },
    methods: {
        tabChange(TabPanelName) {
            this.currentCategory = TabPanelName
            this.fetchTopics(TabPanelName)
        },
        fetchTopics(category) {
            this.loading = true
            this.$service('/topic/getByCategory', {
                category: category
            }, 'GET')
                .then(data => {
                    if (data.code == 1) {
                        this.topics = data.data.reverse()
                        this.loading = false
                    } else {
                        error(data.message)
                    }
                })
                .catch(err => {
                    this.topics = []
                    this.loading = false
                })
        }
    }
}
</script>

<style>

</style>