<template>
    <h1>{{ newMessage }}</h1>
</template>

<script>

export default {
    name: 'ChildComponent',
    props: {
        newMessage: {
            type: String,
            validator: value => {
                return value.includes('pizza')
            }
        }
    }
}

</script>

<style></style>