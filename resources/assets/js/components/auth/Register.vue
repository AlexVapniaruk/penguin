<template>
    <div class="row">
        <div class="col">
            <h4>Register Page</h4>
            <form>
                <div class="form-group">
                    <label for="name">name</label>
                    <input  class="form-control" name="name" v-model="user.name" id="name" type="text">
                </div>
                <div class="form-group">
                    <label for="login">email</label>
                    <input  class="form-control" name="email" v-model="user.email" id="login" type="text">
                </div>
                <div class="form-group">
                    <label for="password">password</label>
                    <input  class="form-control" name="password" v-model="user.password" @input="passwordMatch" type="password" id="password">
                </div>
                <div class="form-group">
                    <label for="cpassword">confirm password</label>
                    <input  class="form-control" v-model="user.cpassword" type="password" id="cpassword">
                    <small v-if="!passwords_match && this.user.password.length>0" id="passwordHelp" class="form-text">Passwords do not match</small>
                </div>
                <button @click="clickRegister" type="button" class="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Register",
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    password: '',
                    cpassword: ''
                },
                passwords_match: false
            }
        },
        methods: {
            ...mapActions(['register']),
            clickRegister(){
                this.passwordMatch()
                if(this.passwords_match === true) {
                    this.register(this.user)
                }
            },
            passwordMatch(){
                if(this.user.password.length>0 && this.user.cpassword.length>0){
                    if(this.user.password === this.user.cpassword){
                        console.log('match')
                        this.passwords_match = true
                    } else {
                        this.passwords_match = false
                    }
                } else {
                    this.passwords_match = false
                }
            }
        }
    }
</script>

<style scoped>

</style>