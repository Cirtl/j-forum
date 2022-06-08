<template>
    <div class="topic-box">
        <a-badge :count="commentCount" status="default" title="回复数">
            <div class="topic-title" @click="lookIt()">
                {{title}}
            </div>
        </a-badge>
        <div class="topic-content">
            {{content}}
        </div>
        <div class="topic-owner">
            <UserOutlined />
            <label>{{username}}</label>
        </div>
    </div>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue'
export default {
    components: { UserOutlined },
    props: {
        topicId: Number,
        title: String,
        content: String,
        commentCount: Number,
        userId: Number,
        username: String
    },
    methods: {
        lookIt() {
            
        }
    }
}
</script>

<style>
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