
import { pushScopeId } from 'vue';
<template>
    <div>
        <h1>Página de Pizza Hut</h1>
        <button @click="pushToHome">Push to Home</button>
        <button @click="replaceToHome">Replace to Home</button>
        <button @click="goToHome">Go to Home</button>
    </div>
</template>

<script>
export default {
    name: 'FoodView',
    beforeRouteEnter(to, from) {
        console.log('beforeRouteEnter')
        console.log({ to, from })
    },
    methods: {
        pushToHome() {
            this.$router.push({ name: 'home'})
        },
        replaceToHome() {
            this.$router.replace({ name: 'home'})
        },
        goToHome() {
            this.$router.go(-1)
        },
    }
}
</script>