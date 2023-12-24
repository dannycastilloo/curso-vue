<template>
  <div>
    <ul v-for="(message, index) in messages" :key='index' :class="mainClass">
      <li>
        {{ index }} - {{ message }}
      </li>
    </ul>
    <button @click="addNewMessage">Agregar Mensaje</button>
    
    <br><br>

    <h1 v-if="linterna">Encendido</h1>
    <h1 v-else>Apagado</h1>
    <button @click="turnOnOff">Encender/Apagar</button>
    
    <br>

    <h2 v-show="showName">Mi nombre es Danny</h2>
    
    <br>

    <h2>{{ isLinternaOn }}</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
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
      this.changeShowStatus()
    },
    changeShowStatus() {
      this.showName = !this.showName
    }
  },
  computed: {
    isLinternaOn() {
      return this.linterna ? 'La linterna está encendida' : 'La linterna está apagada'
    }
  }
}
</script>

<style>
</style>