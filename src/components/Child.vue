<template>
    <div>
        <h1>{{ newMessage }}</h1>
        <button @click="emitNewMessage">Cambiar mensaje</button>
    </div>
</template>

<script>

export default {
    name: 'Child',
    props: {
        newMessage: {
            type: String,
            validator: value => {
                return value.includes('pizza')
            }
        }
    },
    methods: {
        emitNewMessage() {
            this.$emit('changeMessage','hamburguesa')
        }
    }
}

</script>

<style></style>