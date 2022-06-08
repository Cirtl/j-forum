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
                            <div class="list-title">
                                {{ (index+1) + '. ' + item.title }}
                            </div>
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
export default {
    components: {
        FireOutlined
    },
    props: {
        topics: Array
    }
}
</script>

<style>
.list-title {
    cursor: pointer;
}
.list-title:hover {
    color: #005097;
    text-decoration:underline;
}
</style>