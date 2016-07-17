<template>
	<div id="app">
		<h2>This is a grid component built with vue-webpack-simple scaffolding!</h2>
		<div id="searchBar">
			Search <input type="text" v-model="searchQuery" />
		</div>
		<simple-grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery" :sort-order="sortOrder">
		</simple-grid>
	</div>
</template>

<script>
	import simpleGrid from './components/SimpleGrid.vue'

	export default {
		data() {
			return {
				searchQuery: '',
				// order > 0：正序，order < 0：倒序
				sortOrder: {
					column: 'name',
					order: 1
				},
				gridColumns: ['name', 'power'],
				gridData: [{
					name: 'Chuck Norris',
					power: Infinity
				}, {
					name: 'Bruce Lee',
					power: 9000
				}, {
					name: 'Jackie Chan',
					power: 7000
				}, {
					name: 'Jet Li',
					power: 8000
				}]
			}
		}, components: {
			simpleGrid
		}
	}
</script>
<style>
	@import url("./assets/app.css");
</style>