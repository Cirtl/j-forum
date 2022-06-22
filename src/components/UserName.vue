<template>
    <div>{{id}}</div>
</template>

<script>
import md5 from 'js-md5'
export default {
    props: {
        username: String,
        email: String
    },
    computed: {
        id() {
            return this.$props.username + "@" + md5(this.$props.email).slice(0, 5)
        }
    }
}
</script>

<style scoped>

</style>