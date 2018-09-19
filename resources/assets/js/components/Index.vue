<template>
    <div class="container-fluid">
        <notification></notification>
        <main-header></main-header>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import MainHeader from './main/Header'
    import Notification from './main/Notification'

    export default {
        name: "index",
        components: {
            'main-header': MainHeader,
            'notification': Notification
        },
        created(){
            let token = localStorage.getItem('user-token')
            if(token){

            }
        }
    }
</script>

<style scoped>

</style>