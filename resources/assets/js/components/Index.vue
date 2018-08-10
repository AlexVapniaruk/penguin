<template>
    <v-app>
        <v-toolbar app></v-toolbar>
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>