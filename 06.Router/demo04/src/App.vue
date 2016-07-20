<template>
	<div id="app">
		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="page-header">
					<h2>Router Demo - 04</h2>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-2 col-xs-offset-2">
				<div class="list-group">
					<!--使用指令v-link进行导航-->
					<a class="list-group-item" v-link="{ path: '/home'}">Home</a>
					<a class="list-group-item" v-link="{ path: '/about'}">About</a>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<!--用于渲染匹配的组件-->
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="well">
					<p>当前路径：<code>{{$route.path}}</code></p>
					<p>当前参数：<code>{{$route.params | json}}</code></p>
					<p>路由名称：<code>{{$route.name}}</code></p>
					<p>路由查询参数：<code>{{$route.query | json}}</code></p>
					<!--<p>路由匹配项：<code>{{$route.matched | json}}</code></p>-->
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	body {
		background-color: #f7f8f9;
	}
	
	ul {
		margin-top: 10px;
	}
</style>