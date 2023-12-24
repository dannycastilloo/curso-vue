<template>
  <div>
    <ChildTwo>
      <template v-slot:mainSlot="scopeSlot">
        <h3>{{ scopeSlot.mensaje }}</h3>
      </template>
    </ChildTwo>
  </div>
</template>

<script>
import ChildTwo from './components/ChildTwo.vue'

export default {
  name: 'App',
  components: {
    ChildTwo
  },
  data() {
    return {
      message: 'pizza'
    }
  },
}
</script>

<style></style>