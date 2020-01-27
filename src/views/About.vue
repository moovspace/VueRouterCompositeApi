<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img alt="Vue logo" src="../assets/logo.png">

    <!-- Composite Api -->
    <CompApi name="WooW" />

    <!-- Store Vuex Sample -->
    <Store />

    <!-- Store Composite Api Vuex Sample -->
    <StoreCompApi />

    <!-- AddThings component -->
    <AddThing />

  </div>
</template>

<script>
// Composite Api component
import CompApi from '@/components/CompositeApi.vue';
import AddThing from '@/components/AddThing.vue';

// Import Store component
import Store from '@/components/Store.vue';

// Import Store Composite Api component
import StoreCompApi from '@/components/StoreCompositeApi.vue';

export default {
  name: 'about',
  components: {
    CompApi, AddThing, Store, StoreCompApi
  }
}
</script>

<style scoped>
</style>