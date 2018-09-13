<template>
    <div class="row">
        <div class="col">
            <h4>Login Page</h4>
            <form>
                <div class="form-group">
                    <label for="login">email</label>
                    <input  class="form-control"  id="login" type="text">
                </div>
                <div class="form-group">
                    <label for="password">password</label>
                    <input  class="form-control"  type="password" id="password">
                </div>
                <button type="button" class="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>