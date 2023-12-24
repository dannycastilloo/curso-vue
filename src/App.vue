<template>
  <div>
    <Child :newMessage="message" @changeMessage="cambiandoMensaje" />
  </div>
</template>

<script>
import Child from './components/Child.vue'

export default {
  name: 'App',
  components: {
    Child
  },
  data() {
    return {
      message: 'pizza'
    }
  },
  methods: {
    cambiandoMensaje(event) {
      this.message = event
    }
  }
}
</script>

<style></style>