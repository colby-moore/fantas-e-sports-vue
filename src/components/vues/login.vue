<template>
    <div class="login-component">
        <div class="login-box">
            <div class="form-group">
                <label for="email">Email</label>
                <input
                    type="text"
                    name="text"
                    v-model="email"
                    id="email"
                    placeholder=${{ email }}
                />
                <label for="password">Password</label>
                <input 
                    type="text"
                    name="text"
                    v-model="password"
                    id="password"
                    placeholder=${{ password }}
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            email: "Enter Email",
            password: "**********"
        }
    }
}
</script>

<style scoped>

</style>