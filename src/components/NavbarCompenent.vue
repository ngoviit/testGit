<template>
    <div class="navbar">
        <h1>Vuex app todos</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li v-if="isAuthenticated">Total todos: {{todos.length}}
                <button @click="TOGGLE_AUTH">Logout</button>
            </li>
            <li v-else>Total todos: Not data
                <button @click="TOGGLE_AUTH">login</button>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    computed:{...mapGetters(['isAuthenticated', 'todos'])},
    methods: mapMutations(['TOGGLE_AUTH'])
}
</script>
<style scoped>
.navbar {
 padding: 5px;
 text-align: center;
 background: rgb(240, 240, 240);
 color: black;
}

.navbar ul {
 display: flex;
 justify-content: space-around;
 align-items: center;
 list-style: none;
 padding: 0;
}

</style>