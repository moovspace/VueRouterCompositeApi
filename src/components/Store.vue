<template>
    <div>
        <h1>Todos list</h1>
        <div class="todos">
            <div class="todo" v-for="todo in allTodos" v-bind:key="todo.id">
                <div class="cell flex1"> {{ todo.id }} </div> <div class="cell flex10">  {{ todo.title }} </div> <div class="cell flex1">{{ todo.completed }} </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

// Vue store
export default {
  name: 'about',
  components: {
  },
  methods: {
    ...mapActions(['loadThings'])
  },
  computed: {
    ...mapGetters(['allTodos','doneTodos']),
    ...mapState({a: state => state.a, b: state => state.b})
  },
  created() {
    this.loadThings();
  }
}
</script>

<style>
.todo{display: flex; align-items: center; justify-content: left; margin: 5px auto; width: 90%; padding: 10px 15px; color: #273849; border: 1px solid #273849; box-sizing: border-box; overflow: hidden;}
.todo .cell{padding: 5px; text-align: left}
.todo .flex1{flex: 1}
.todo .flex10{flex: 10}
</style>