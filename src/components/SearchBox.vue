<template>
  <div class="search-box">
        <div class="logo-box">
            <el-image :src="require('@/assets/logo.png')"/>
            <span class="logo-text-box">
                <div style="font-size:40px">
                    <strong>J-论坛</strong>
                </div>
                <div style="font-size:16px; font-family: monospace">
                    <em>所有人自由交流的平台</em>
                </div>
            </span>
        </div>
        <a-input-search
            placeholder="找点有趣的事情吧"
            size="large"
            v-model:value="searchText"
            enter-button
            @search="search()">
            <template #addonBefore>
                <a-select v-model:value="searchType" style="width: 100px">
                    <a-select-option value="title">话题</a-select-option>
                </a-select>
            </template>
        </a-input-search>
  </div>
</template>

<script>
import { warnMessage } from '@/utils/message'
export default {
    data() {
        return {
            searchText: '',
            searchType: 'title'
        }
    },
    watch: {
        $route: {
            handler(val){
                if (val.path !== '/search') {
                    this.searchText = ''
                }
            },
            deep: true
        }
    },
    methods: {
        search() {
            if (this.searchText === '') {
                warnMessage('请输入搜索内容')
                return
            }
            this.$router.push({
                path: '/search',
                query: {
                    title: this.searchText
                }
            })
        }
    }
}
</script>

<style scoped>
.search-box {
    width: 80%;
    display: block;
}
.logo-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 140px;
    margin-left: 32.5%;
}
.logo-text-box {
    display: inline-block;
    margin-top: 8px;
}
</style>