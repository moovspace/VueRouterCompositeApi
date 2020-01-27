<template>
	<div>
		<h1>Todos list</h1>
		<div class="todos">
				<div class="todo" v-for="todo in allTodos1" v-bind:key="todo.id">
						<div class="cell flex1"> {{ todo.id }} </div> <div class="cell flex10">  {{ todo.title }} </div> <div class="cell flex1">{{ todo.completed }} </div>
				</div>
		</div>
	</div>
</template>

<script>
import { useStore } from '../store-composite-api'
// import { computed } from '@vue/composition-api'
// Composite Api Store Import

export default {
	setup(){
		const store = useStore();

		// Trigger Mutations
		// store.commit("loadThings", "Hello 1");

		// Trigger Actions
		store.dispatch('loadThings1')

		// Trigger Getters
		const allTodos1 = store.getters.allTodos1

		// computed(() => { allTodos })

		// Return to the template
		return { allTodos1 }
	}
}
</script>

<style>
.todo{display: flex; align-items: center; justify-content: left; margin: 5px auto; width: 90%; padding: 10px 15px; color: #273849; border: 1px solid #273849; box-sizing: border-box; overflow: hidden;}
.todo .cell{padding: 5px; text-align: left}
.todo .flex1{flex: 1}
.todo .flex10{flex: 10}
</style>