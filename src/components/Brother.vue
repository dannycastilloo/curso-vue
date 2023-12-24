<template>
    <div>
        <button @click="nuevoMensaje">Nuevo Mensaje</button>
    </div>
</template>

<script>

import eventBus from '../eventBus';

export default {
    name: 'Brother',
    methods: {
        nuevoMensaje() {
            eventBus.emit('nuevoMensaje', 'Do you want pizza?')
        }
    }
}

</script>