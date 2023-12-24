<template>
    <div>
        <h1>Hola</h1>
        <slot name="mainSlot" :mensaje="message" />
        <h2>¿Qué sabor de pizza te gustó más?</h2>
    </div>
</template>

<script>

export default {
    name: 'ChildTwo',
    data() {
        return {
            message: 'Papa Johns o Pizza Hut'
        }
    }
}

</script>

<style></style>