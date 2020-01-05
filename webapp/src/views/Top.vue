<template>
	<div id="top">
		<h1>新しい可能性を見つけよう！！</h1>
		<div id="container">
			<div class="side-bar">
			</div> <!-- side-bar-->
			<PlanList></PlanList>
		</div> <!--container-->
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import PlanList from "@/components/PlanList.vue";
//	export default {
//		name: 'top',
//		components: {
//			PlanList
//		}
//	}
	@Component({
		components: {
			PlanList,
		},
	})
	export default class Top extends Vue {}
</script>
<style>
div#top{
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
div#main-body li{
	background:#fff;
	margin-bottom:10px;
}
div.kn-list{
	display:flex;
}
div.list-logo{
	width:100px;
	height:100px;
}
div.list-logo img{
	width:50px;
	height:50px;
	border-radius:50px;
	background:#bbbbbb;
}
</style>
