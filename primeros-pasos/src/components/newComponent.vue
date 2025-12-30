<template>
    <div id="app">
        <h1>
            {{ message }}
            <button @click="changeMessage">Change message</button>
        </h1>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        computed:{
            ...mapState(['message'])
        },
        methods:{
            ...mapMutations(['setMessage']),
            changeMessage(){
                this.setMessage('New message from newComponent.vue');
            }
        }
    }
</script>