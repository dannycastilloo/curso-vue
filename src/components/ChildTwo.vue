<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
import eventBus from '../eventBus'

export default {
    name: 'ChildTwo',
    data() {
        return {
            message: 'Papa Johns o Pizza Hut'
        }
    },
    created () {
        eventBus.on()
    }
}

</script>

<style></style>