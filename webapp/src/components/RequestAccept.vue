<template>
	<div class="requestAccept">
		<h1>新しい可能性を見つけよう！！</h1>
		<div id="container-requestAccept">
			<div id="main">
				<div class="requestAcceptpanel">
					<form>
						<h2>リクエストを承認</h2>
						<div class="request-title">たけしさんからのリクエストが届いてます</div>
						<div class="message">初めまして木材を磨くのに命をかけてますたけしです。ガソリンの飲み方を教えてください。</div>
						<div class="requestAcceptexec"><button>リクエストを承認する</button></div>
					</form>
				</div>
			</div> <!--main-->
		</div> <!--container-->
	</div>
</template>
<script lang="ts">
</script>
<style>
div.requestAccept{
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
div.requestAcceptpanel{
    padding: 80px;
    margin: 10px 10%;
    background:#fff;
}
div#container-requestAccept{
    background:#f4f8fa;
    height:500px;
}
div.request-title input{
    background: #f4f8fa;
    padding: 20px;
    border: none;
    border-radius: 4px;
    width: 300px;
    margin: 0 0 20px;
}
div.message input{
    background: #f4f8fa;
    padding: 20px;
    border: none;
    border-radius: 4px;
    width: 300px;
    margin: 0 0 20px;
}

div.requestAcceptexec button{
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
