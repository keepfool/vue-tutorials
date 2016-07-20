<template>
	<div>
		<h1>Home</h1>
		<p>{{msg}}</p>
	</div>
	<div>
		<ul class="nav nav-tabs">
			<li>
				<a v-link="{ path: '/home/news'}">News</a>
			</li>
			<li>
				<a v-link="{ path: '/home/message'}">Messages</a>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				msg: 'Hello, vue router!'
			}
		}
	}
</script>