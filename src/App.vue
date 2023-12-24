<template>
  <div>
    <ChildComponent :newMessage="message" />
  </div>
</template>

<script>
import ChildComponent from './components/Child.vue'

export default {
  name: 'App',
  components: {
    ChildComponent
  },
  data() {
    return {
      message: 'pizza'
    }
  }
}
</script>

<style></style>