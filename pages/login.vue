<template>
    <div class="container">
        <form @submit.prevent="login">
            <p class="error" v-if="formError">{{ formError }}</p>
            <p>name: <input type="text" v-model="formUsername" name="username"></p>
            <p>password: <input type="text" v-model="formPassword" name="password"></p>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formError: null,
            formUsername: 'demo',
            formPassword: 'password0',
        }
    },
    methods: {
        async login() {
            try {
                await this.$store.dispatch('login',{
                    username: this.formUsername,
                    password: this.formPassword
                })
                this.$router.push('/')
            } catch (error) {
                this.formError = error.message
            }
        }
    },
}
</script>