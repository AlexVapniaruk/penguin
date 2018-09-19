<template>
    <div class="row header">
        <div class="col-6 logo">
            <router-link class="menu-item" :to="{ path: logo.link }">
               {{ logo.title }}
            </router-link>
        </div>
        <div class="col-6 menu align-self-end">
            <div class="row justify-content-end" v-if="!authenticated">
                <router-link class="menu-item"
                             v-for="item in items"
                             :key="item.title"
                             :to="{ path: item.link }">
                    <a>
                    {{ item.title }}
                    </a>
                </router-link>
            </div>
            <div class="row justify-content-end" v-if="authenticated">
                <router-link class="menu-item"
                             v-for="item in itemsAuthenticated"
                             :key="item.title"
                             :to="{ path: item.link }">
                    <a>
                        {{ item.title }}
                    </a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Header",
        data() {
            return {
                items: [
                    {title: 'Login', link: '/login'},
                    {title: 'Register', link: '/register'}
                ],
                itemsAuthenticated: [
                    {title: 'Profile', link: '/profile'},
                    {title: 'Logout', link: '/logout'}
                ],
                logo: {
                    title: 'Logo',
                    link: '/home'
                },
                right: null
            }
        },
        computed: {
            ...mapGetters({
                authenticated: 'getAuthenticated'
            })
        }
    }
</script>

<style scoped>

</style>