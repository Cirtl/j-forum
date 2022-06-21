<template>
    <div class="topic-box">
        <el-card class="top-container">
            <div class="topic-title">
                {{topic.title}}
                <el-tag>{{topic.topic_category}}</el-tag>
            </div>
            <el-row :gutter="20">
                <el-col :span="2">
                    <div class="topic-owner-img">
                        <UserOutlined v-if="topic.topic_user.avatar === null" style="font-size: 35px" />
                        <a-image v-else :src="topic.topic_user.avatar" style="width: 100%;" />
                    </div>
                </el-col>
                <el-col :span="5">
                    <div>
                        <!-- <div style="font-size:15px">{{topic.topic_user.username}}</div> -->
                        <UserName style="font-size:15px" :username="topic.topic_user.username" :email="topic.topic_user.email"/>
                        <div style="font-size: 10px; color: gray">{{topic.topic_time}}</div>
                    </div>
                </el-col>
            </el-row>
            <div class="topic-content">
                {{topic.content}}
            </div>
            <div class="topic-imgs">

            </div>
            <div class="topic-options">
                <div>
                    <!-- 这里放一些对于帖子的操作 -->
                </div>
            </div>
        </el-card>
        <el-card class="comment-container" v-if="comments.length == 0">
            <el-empty description="发布第一条评论吧"/>
        </el-card>
        <el-card class="comment-container" v-else>
            <CommentItem
                v-for="comment in comments" :key="comment.id"
                :avatar="comment.comment_user.avatar"
                :username="comment.comment_user.username"
                :email="comment.comment_user.email"
                :comment-time="comment.comment_time"
                :content="comment.content"
                :floor="comment.floor"/>
        </el-card>
        <a-affix :offset-bottom="15">
            <a-collapse class="input-container">
                <a-collapse-panel header="发布评论">
                    <div class="input-area" ref="area">
                        <el-input v-model="comment" :autosize="{ minRows: 4 }" type="textarea" />
                        <div style="width: 100%; padding-top: 5px">
                            <a-button type="primary" @click="submit()">发布</a-button>
                        </div>
                    </div>
                </a-collapse-panel>
            </a-collapse>
        </a-affix>
    </div>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue'
import CommentItem from '@/components/comment/CommentItem'
import UserName from '@/components/UserName'
import { getId, isLogin } from '@/utils/auth'
import { warnMessage, successMessage, errorMessage } from '@/utils/message'
export default {
    components: {
        UserOutlined,
        CommentItem,
        UserName
    },
    created() {
        this.$service('/topic/browseUp', {
            id: this.$route.query.id
        }, 'GET')
    },
    mounted() {
        this.fetchSelf()
        this.fetchComments()
    },
    data() {
        return {
            topic: {
                id: 0,
                title: "",
                content: "",
                comment_count: 0,
                status: 0,
                topic_user_id: 0,
                topic_user: {
                    id: 0,
                    email: "",
                    password: 0,
                    username: "",
                    avatar: ""
                },
                topic_category: "",
                browse_count: 0,
                thumbs_up: 0,
                topic_time: ""
            },
            comments: [],
            comment: ''
        }
    },
    methods: {
        fetchSelf() {
            this.$service('/topic/getById', {
                id: this.$route.query.id
            }, 'GET')
                .then(data => {
                    console.log(data)
                    this.topic = data.data
                })
        },
        fetchComments() {
            this.$service('/comment/getByTopicId', {
                id: this.$route.query.id
            }, 'GET')
                .then(data => {
                    console.log(data)
                    this.comments = data.data
                    console.log(this.comments)
                })
        },
        submit() {
            // console.log(this.$refs.area.offsetHeight+26)
            // console.log(window.scrollTo(0, 100))
            if (! isLogin()) {
                warnMessage("登录后再来评论吧")
                return
            }
            if (this.comment === '') {
                warnMessage('请输入内容')
            } else{
                this.$service('/comment/add', {
                    content: this.comment,
                    comment_user_id: getId(),
                    comment_topic_id: this.$route.query.id
                }, 'POST')
                    .then(data => {
                        if (data.code === 1) {
                            successMessage('评论成功')
                            this.comment = ''
                            this.fetchComments()
                        } else {
                            errorMessage(data.message)
                        }
                    })
            }
        }
    }
}
</script>

<style scoped>
.comment-box {
    width: 100%;
}
.topic-box {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
}
.top-container {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}
.comment-container {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}
.input-container {
    width: 95%;
    margin-left: 2.5%;
    height: auto;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
}
.topic-title {
    font-size: 25px;
    font-weight: bold;
}
.topic-owner-img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.topic-content {
    margin-top: 2px;
    padding-top: 8px;
    width: 90%;
    border-top: 1px solid #ccc;
}
.input-title {
    padding: 10px;
    font-size: 15px;
}
.input-area {
    width: 100%;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>