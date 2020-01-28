<template>
	<div>
		<h1>Todos list</h1>
		<div class="todos">
				<div class="todo" v-for="todo in Todos" v-bind:key="todo.id">
						<div class="cell flex1"> {{ todo.id }} </div> <div class="cell flex10">  {{ todo.title }} </div> <div class="cell flex1">{{ todo.completed }} </div>
				</div>
		</div>
	</div>
</template>

<script>
import { useStore } from '../store-composite-api'
// import { computed, watch } from '@vue/composition-api'
import { ref } from "@vue/composition-api";

export default {
	setup(){
		const store = useStore();

		let Todos = ref(store.getters.allTodos);

		// Async function, update todos
		store.dispatch('loadThings').then(() => {
			Todos.value = store.getters.allTodos
			console.log("Loaded!!! " + Todos.value)
		});

		// computed(() => {
		// 	console.log("Computed " + Todos.value)
		// });

		// watch(Todos, (newVal, oldVal) => {
		// 	console.log("Changed " + newVal + oldVal)
		// 	Todos.value = store.getters.allTodos
		// });

		return { Todos }
	}
}
</script>

<style>
.todo{display: flex; align-items: center; justify-content: left; margin: 5px auto; width: 90%; padding: 10px 15px; color: #273849; border: 1px solid #273849; box-sizing: border-box; overflow: hidden;}
.todo .cell{padding: 5px; text-align: left}
.todo .flex1{flex: 1}
.todo .flex10{flex: 10}
</style>