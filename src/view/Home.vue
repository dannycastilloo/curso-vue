<template>
    <div>
        <h1>Hola desde home</h1>
        <button @click="goToFood">Go to Food</button>
    </div>
</template>
<script>

export default {
    name: 'Home',
    methods: {
        goToFood() {
            this.$router.go(1)
        },
    }
}
</script>