<template>
	<ul>
		<li v-for="news in newsList">
			<a v-link="{ name: 'detail' , params: {id: news.id } , query: {a: 'xyz'} }">{{ news.title }}</a>
		</li>
	</ul>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	
	export default{
		data: function(){
			return {
				newsList: [
					{ id: '01', title: 'News 01'},
					{ id: '02', title: 'News 02'},
					{ id: '03', title: 'News 03'}
				]
			}
		}
	}
	
</script>