<template>
    <div @click="lookIt()">{{title}}</div>
</template>

<script>
export default {
    props: {
        title: String,
        topicId: Number
    },
    methods: {
        lookIt() {
            const { href } = this.$router.resolve({
                path: '/post',
                query: {
                    id: this.$props.topicId,
                }
            })
            window.open(href, '_blank')
        }
    }
}
</script>

<style scoped>

</style>