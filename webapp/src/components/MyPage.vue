<template>
	<div class="my-page">
		<h1>新しい可能性を見つけよう！！</h1>
		<div id="container-my-page">
			<div id="main">
				<div class="my-pagepanel">
					<form>
						<h2>MyPage</h2>
						<div class="username"><input></div>
						<div class="password"><input></div>
						<div class="my-pageexec"><button>ログインする</button></div>
					</form>
				</div>
			</div> <!--main-->
		</div> <!--container-->
	</div>
</template>
<script lang="ts">
</script>
<style>
div.my-page{
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
div.my-pagepanel{
    padding: 80px;
    margin: 10px 10%;
    background:#fff;
}
div#container-my-page{
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

div.my-pageexec button{
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
