<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Money />
  </div>
</template>

<script>
// @ is an alias to /src
import Money from '@/components/Money.vue'

export default {
  name: 'home',
  components: {
    Money
  }
}
</script>
