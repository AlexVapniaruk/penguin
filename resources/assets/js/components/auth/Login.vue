<template>
    <div class="row">
        <div class="col">
            <h4>Login Page</h4>
            <form>
                <div class="form-group">
                    <label for="login">email</label>
                    <input  class="form-control"  id="login" type="text" v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="password">password</label>
                    <input  class="form-control"  type="password" id="password" v-model="user.password">
                </div>
                <button type="button" @click="userLogin" class="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Login",
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['login']),
            userLogin(){
                if(this.checkLength()) {
                    this.login(this.user)
                }
            },
            checkLength(){
                if(this.user.email.length>0 && this.user.password.length>0){
                    return true
                }
                return false
            }
        }
    }
</script>

<style scoped>

</style>