<template>
    <div>
        <h1 ref="mainElement">{{ message }}</h1>
        <button @click="changeMessage">Cambiar</button>
    </div>
</template>

<script>

export default {

    name: 'PrimerComponent',
    data() {
        return {
            message: 'Hola'
        }
    },
    methods: {
        changeMessage() {
            this.message = 'Hola Mundo'
        },
    },
    beforeCreate() {
        console.log('Estoy en beforeCreate')
        console.log(this.message)
    },
    created() {
        console.log('Estoy en created')
        console.log(this.message)
    },
    beforeMount() {
        console.log('Estoy en beforeMount')
        console.log(this.$refs)
    },
    mounted() {
        console.log('Estoy en mounted')
        console.log(this.$refs)
        console.log(this.$refs.mainElement)
    },
    beforeUpdate() {
        console.log('Estoy en beforeUpdate')
        console.log(this.$refs.mainElement)
    },
    updated() {
        console.log('Estoy en updated')
        console.log(this.$refs.mainElement)
    },
    beforeDestroy() {
        console.log('Estoy en beforeDestroy')
        console.log(this.message)
    },
    destroyed() {
        console.log('Estoy en destroyed')
        console.log(this.message)
    }

}

</script>

<style></style>