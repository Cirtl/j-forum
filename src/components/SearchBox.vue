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
                    <a-select-option value="id">用户名</a-select-option>
                </a-select>
            </template>
        </a-input-search>
  </div>
</template>

<script>
export default {
    data() {
        return {
            searchText: '',
            searchType: 'title'
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