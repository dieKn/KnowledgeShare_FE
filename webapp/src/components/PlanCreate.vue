<template>
	<div class="plan-create">
		<h1>新しい可能性を見つけよう！！</h1>
		<div id="container-plan-create">
			<div id="main">
				<div class="plan-createpanel">
					<form>
						<h2>プラン作成ページ</h2>
						<div class="username"><label for="name">プラン名</label><input></div>
						<div class="password"><label for="plan-content">プラン内容</label><input></div>
						<div class="plan-createexec"><button>プラン作成する</button></div>
					</form>
				</div>
			</div> <!--main-->
		</div> <!--container-->
	</div>
</template>
<script lang="ts">
</script>
<style>
div.plan-create{
    background: #f4f8fa;
}
h2{
    color: #13b1c0;
}
div#container{

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
div.plan-createpanel{
    padding: 80px;
    margin: 10px 10%;
    background:#fff;
}
div#container-plan-create{
    background:#f4f8fa;
    height:500px;
}
div.username input{
    background: #f4f8fa;
    padding: 20px;
    border: none;
    border-radius: 4px;
    width: 300px;
    margin: 0 0 20px;
}
div.password input{
    background: #f4f8fa;
    padding: 20px;
    border: none;
    border-radius: 4px;
    width: 300px;
    margin: 0 0 20px;
}

div.plan-createexec button{
    width: 330px;
    border-radius: 40px;
    border: 1px solid #13b1c0;
    background: #13b1c0;
    color: #fff;
    text-decoration: none;
    padding: 15px 50px;
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
}
</style>
