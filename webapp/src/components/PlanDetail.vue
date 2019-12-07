<template>
  <div class="plan-detail">
    <h1>新しい可能性を見つけよう！！</h1>
	<div id="container">
		<div class="side-bar">
		</div> <!-- side-bar-->
		<div id="main">
			<div id="main-header">
				<h2 class="plan-title">ガソリン詰めます！！</h2>
			</div>
			<div id="main-body">
				<div id="profile-about">
					<div class="plan-img"><img src="http://oma-wide.net/wp/wp-content/uploads/2017/04/%E5%B1%B1%E5%B4%8E%E7%9F%B3%E6%B2%B9%E5%BA%972018-1.jpg" /></div>
					<div class="profile-content">
						<h3>{{ this.planId }}</h3>
						<h3>できること</h3>
						<p>ガソリンの詰め方なら負けません。要望があればガソリン飲みます。</p>
					</div>
				</div>
			</div>
		</div> <!--main-->
	</div> <!--container-->
  </div>
</template>
<script lang="ts">
/* eslint-disable no-console */
// @ is an alias to /src
import {Component, Vue} from "vue-property-decorator";
import {Route} from 'vue-router'
interface WithRoute /* can also extend Vue to make sure nothing is colliding */ {
	$route: Route
}
@Component
export default class PlanDetail extends Vue implements WithRoute {
	public planId: string = '';
	mounted(): void{
		this.planId = this.$route.params.planId;
		console.log(this.planId);
	}
}
</script>
<style>
div.plan-detail{
	background: #f4f8fa;
}
div#container{
    width:90%;
    margin:auto;
    display:grid;
    grid-template-columns: 250px 1fr;
}
div#main{
	
}
div#main-header{
	height:100px;	
}
div#main-body{
	
}
div.side-bar{
	background: #fefefe;	
}
div.plan-img img{
	width: 600px;
}
</style>
