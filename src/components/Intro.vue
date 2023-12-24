<template>
    <div>
        <ul v-for="(message, index) in messages" :key='index'>
            <li :class="{ active: linterna }">
                {{ index }} - {{ message }}
            </li>
        </ul>
        <button @click="addNewMessage">Agregar Mensaje</button>

        <br><br>

        <h1 v-if="linterna">Encendido</h1>
        <h1 v-else>Apagado</h1>
        <button @click="turnOnOff">Encender/Apagar</button>

        <br>

        <h2 :class="{ active: showName }" :style="{ backgroundColor: showName ? 'red' : 'aquamarine' }">Mi nombre es Danny
        </h2>
        <button @click="changeShowStatus">Show Name</button>
        <br>

        <h2>{{ isLinternaOn }}</h2>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            messages: [
                'Salir a pasear',
                'Ver Jujutsu Kaisen',
                'Estudiar Vue'
            ],
            mainClass: 'container',
            linterna: false,
            showName: true
        }
    },
    methods: {
        addNewMessage() {
            const message = 'Montar bicicleta'
            this.messages.push(message)
        },
        turnOnOff() {
            this.linterna = !this.linterna
        },
        changeShowStatus() {
            this.showName = !this.showName
        },
    },
    computed: {
        isLinternaOn() {
            return this.linterna ? 'La linterna está encendida' : 'La linterna está apagada'
        },
    },
    watch: {
        linterna(value, oldValue) {
            console.log(`La linterna estaba en ${oldValue} y ahora está en ${value}`)
        }
    }
}
</script>
  
<style>
.active {
    color: green;
}
</style>