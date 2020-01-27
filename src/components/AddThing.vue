<template>
	<div class="add">
		<h1>Add Things</h1>
		<form @submit="onSubmit">
			<input type="text" v-model="title" placeholder="Add something ..." name="title">
			<input type="submit" value="Submit">
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: "AddThing",
	data() {
		return {
			title: ''
		}
	},
	methods: {
		...mapActions(['addThing']),
		onSubmit(e){
			e.preventDefault();
			// Add to list
			this.addThing(this.title);
			// Access to component data !!!
			this.$data.title = '';
		}
	}
}
</script>

<style scoped>
form{display: flex;}
input[type=text]{flex: 10; border: 1px solid #304050;}
input[type=submit]{flex: 2; background: #42b985; color: #fff;}
</style>