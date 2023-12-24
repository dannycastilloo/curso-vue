<template>
  <div>
    <ChildTwo />
    <Brother />
  </div>
</template>

<script>
import ChildTwo from './components/ChildTwo.vue'
import Brother from './components/Brother.vue'

export default {
  name: 'App',
  components: {
    ChildTwo,
    Brother
  },
  data() {
    return {
      message: 'pizza'
    }
  },
}
</script>

<style></style>