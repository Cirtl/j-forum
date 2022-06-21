<template>
    <SearchBox/>
    <el-row :gutter="10" class="menu-box" >
        <el-col :span="16">
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
        </el-col>
        <el-col :span="8">
            <a-affix :offset-top="70">
                <HotTopics :topics="hotTopics"/>
            </a-affix>
        </el-col>
    </el-row>
    <a-affix :offset-bottom="10">
        <a-button size="large" type="primary" @click="addTopic()">
            <template #icon><EditOutlined /></template>
            发布帖子
        </a-button>
    </a-affix>

    <el-dialog v-model="editing" title="发布一个话题吧...">
        <el-form :model="topic" :rules="topic_rules" ref="topicAdd">
            <el-form-item label="标题" prop="title">
                <el-input v-model="topic.title"/>
            </el-form-item>
            <el-form-item label="分区" prop="category">
                <el-select v-model="topic.category" placeholder="请选择话题所属分区">
                    <el-option
                        v-for="category in allCategories" :key="category"
                        :label="category" :value="category"/>
                </el-select>
            </el-form-item>
            <el-form-item label="内容">
                <el-input v-model="topic.content"
                :autosize="{ minRows: 4, maxRows: 10 }"
                type="textarea"/>
            </el-form-item>
            <el-form-item>
                <el-row style="width: 100%">
                    <el-col :span="2"/>
                    <el-col :span="6">
                        <el-button type="primary" @click="onSubmit">创建</el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-button @click="editing=false">取消</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
import { UserOutlined, FireOutlined, FireFilled, EditOutlined } from '@ant-design/icons-vue'
import SearchBox from '@/components/SearchBox'
import TopicItem from '@/components/topic/TopicItem'
import HotTopics from '@/components/HotTopics'
import { isLogin, getId } from '@/utils/auth'
import { warnMessage, successMessage, errorMessage } from '@/utils/message'
export default {
    components: {
        UserOutlined, FireOutlined, FireFilled, EditOutlined,
        SearchBox,
        TopicItem,
        HotTopics
    },
    mounted() {
        this.fetchTopics(this.currentCategory)
        this.fetchHotTopics(10)
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
            topics: [],
            hotTopics: [],
            editing: false,
            topic: {
                title: '',
                content: '',
                category: '',
            },
            topic_rules: {
                title: [
                    {required: true, message: '请决定一个标题', trigger: 'blur'}
                ],
                category: [
                    {required: true, message: '请选择一个分区', trigger: 'blur'}
                ]
            },
        }
    },
    watch: {
        editing: function (val, oldVal) {
            if (val === false) {
                this.topic = {
                    title: '',
                    content: '',
                    category: '',
                }
            }
        }
    },
    methods: {
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
        },
        fetchHotTopics(num) {
            this.$service('/topic/getTopBrowsed', {
                num: num
            }, 'GET')
                .then(data => {
                    this.hotTopics = data.data
                })
                .catch(err => {
                    this.hotTopics = []
                })
        },
        tabChange(TabPanelName) {
            this.currentCategory = TabPanelName
            this.fetchTopics(TabPanelName)
        },
        addTopic() {
            if (isLogin()) {
                this.editing = true
            } else {
                warnMessage("登录后即可发帖哦")
            }
        },
        onSubmit() {
            this.$refs.topicAdd.validate((valid) => {
                if (valid) {
                    this.$service('/topic/add', {
                        title: this.topic.title,
                        content: this.topic.content,
                        topic_user_id: getId(),
                        topic_category: this.topic.category
                    }, 'POST')
                        .then(data => {
                            if (data.code == 1) {
                                successMessage('发帖成功')
                                if (this.currentCategory == this.topic.category) {
                                    this.fetchTopics(this.topic.category)
                                }
                                this.editing = false
                            } else {
                                errorMessage(data.message)
                            }
                        })
                        .catch(err => {
                            errorMessage(err.message)
                        })
                } else {
                    return false
                }
            })
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