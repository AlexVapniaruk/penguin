<template>
    <div v-if="errors.length" class="errors-wrapper animated bounceInRight">
        <div class="close"><font-awesome-icon :icon="{ prefix: 'fas', iconName: 'times-circle' }" @click="close()"/></div>
        <div :class="(error.status === 'error') ? errorClass + 'danger' : errorClass + error.status " v-for="error in errors">
            <span>{{ error.text }}</span>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import '../../../css/animate.min.css'

    export default {
        name: 'notification',
        data: function () {
            return {
                errorClass: 'error-block alert alert-'
            }
        },
        computed: mapGetters({
            errors: 'getErrors'
        }),
        methods: {
            ...mapActions({
                removeErrors: 'removeErrors'
            }),
            close () {
                this.removeErrors()
            }
        }
    }
</script>

<style scoped>

</style>
