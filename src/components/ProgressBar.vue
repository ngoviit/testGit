<template>
    <p v-if="isAuthenticated" class="progress-bar">Progress: {{progress}}</p>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {...mapGetters(['progress', 'isAuthenticated'])}
}
</script>
<style scoped>
    .progress-bar{
        padding: 5px;
        text-align: center;
        background-color: rgb(106, 248, 118);
        color: black;
    }
</style>