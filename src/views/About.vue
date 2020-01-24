<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <CompApi name="Adam Wielki" />
  </div>
</template>

<script>
// @ is an alias to /src
import CompApi from '@/components/CompositeApi.vue'

export default {
  name: 'about',
  components: {
    CompApi
  }
}
</script>