<template>
    <a-card title="热门话题">
        <template #extra>
            <FireOutlined style="color: red;"/>
        </template>
        <a-list :data-source="topics">
            <template #renderItem="{item, index}">
                <a-list-item>
                    <a-list-item-meta>
                        <template #title>
                            <TitleLink
                                class="list-title"
                                :title="(index+1)+'. '+item.title"
                                :topic-id="item.id"/>
                        </template>
                    </a-list-item-meta>
                    <template #actions>
                        {{ item.browse_count }}
                    </template>
                </a-list-item>
            </template>
        </a-list>
    </a-card>
</template>

<script>
import { FireOutlined } from '@ant-design/icons-vue'
import TitleLink from '@/components/topic/TitleLink'
export default {
    components: {
        FireOutlined,
        TitleLink
    },
    props: {
        topics: Array
    }
}
</script>

<style scoped>
.list-title {
    cursor: pointer;
}
.list-title:hover {
    color: #005097;
    text-decoration:underline;
}
</style>