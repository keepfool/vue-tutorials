
<template>
	<table>
		<thead>
			<tr>
				<th v-for="col in columns" v-on:click="sortBy(col)">
					{{ col | capitalize}}
					<span class="arrow" v-show="sortKey === col" v-bind:class="sortOrders[sortKey] > 0 ? 'asc' : 'dsc' "></span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="entry in data | filterBy filterKey | orderBy sortKey sortOrders[sortKey]">
				<td v-for="col in columns">
					{{entry[col]}}
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	export default {
		props: {
			data: Array,
			columns: Array,
			sortOrder: Object,
			filterKey: String
		},
		methods: {
			sortBy: function(col) {
				this.sortKey = col;
				this.sortOrders[col] *= -1
			}
		},
		data() {
			var sortOrders = {}
			this.columns.forEach(function(col) {
				sortOrders[col] = 1
			})
			return {
				sortKey: '',
				sortOrders: sortOrders
			}
		}
	}
</script>


