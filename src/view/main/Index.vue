<template>
    <SearchBox/>
    <el-row :gutter="10" class="menu-box" >
        <el-col :span="16">
            <router-view />
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
                <el-upload
                    :file-list="fileList"
                    accept="image/*"
                    action="/upload/images"
                    list-type="picture-card"
                    :beforeUpload="beforeUpload"
                    :onSuccess="uploadSuccess"
                    @preview="handlePreview">
                    <div v-if="fileList.length < 6">
                        <PlusOutlined />
                    </div>
                </el-upload>
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
    <el-dialog v-model="preview">
        <el-image fit="contain" :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>

</template>

<script>
import { UserOutlined, FireOutlined, FireFilled, EditOutlined, PlusOutlined } from '@ant-design/icons-vue'
import SearchBox from '@/components/SearchBox'
import TopicItem from '@/components/topic/TopicItem'
import HotTopics from '@/components/HotTopics'
import { isLogin, getId } from '@/utils/auth'
import { warnMessage, successMessage, errorMessage } from '@/utils/message'
import { appendImages } from '@/utils/image'
export default {
    components: {
        UserOutlined, FireOutlined, FireFilled, EditOutlined, PlusOutlined,
        SearchBox,
        TopicItem,
        HotTopics
    },
    mounted() {
        this.fetchHotTopics(10)
    },
    data() {
        const defaultSettings = require('@/settings.js')
        return {
            allCategories: defaultSettings.allCategories,
            hotTopics: [],
            editing: false,
            topic: {
                title: '',
                content: '',
                category: '',
            },
            raw_content: '',
            topic_rules: {
                title: [
                    {required: true, message: '请决定一个标题', trigger: 'blur'}
                ],
                category: [
                    {required: true, message: '请选择一个分区', trigger: 'blur'}
                ]
            },
            fileList: [],
            preview: false,
            dialogImageUrl: ''
        }
    },
    watch: {
        editing: function (val) {
            if (val === false) {
                this.topic = {
                    title: '',
                    content: '',
                    category: '',
                }
                console.log(this.fileList)
                this.fileList = []
            }
        }
    },
    methods: {
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
                    this.handleImages()
                    console.log(this.topic)
                    this.$service('/topic/add', {
                        title: this.topic.title,
                        content: this.raw_content,
                        topic_user_id: getId(),
                        topic_category: this.topic.category
                    }, 'POST')
                        .then(data => {
                            console.log(data)
                            if (data.code == 1) {
                                successMessage('发帖成功')
                                this.$store.dispatch('inform/addedCategory', this.topic.category)
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
        },
        handlePreview (file) {
            this.preview = true
            this.dialogImageUrl = file.url
        },
        beforeUpload (file) {
            if (file.type.match(/image/) == null) {
                warnMessage('只能上传图片')
                return false
            } else {
                return true
            }
        },
        uploadSuccess (response, uploadFile, uploadFiles) {
            uploadFiles.pop()
            uploadFiles.push({url: response.data})
        },
        handleImages () {
            if (this.fileList.length == 0)
                return
            
            this.raw_content = appendImages(this.topic.content, this.fileList)
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