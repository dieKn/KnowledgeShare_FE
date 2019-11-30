<template>
  <div class="about">
    <h1>新しい可能性を見つけよう！！</h1>
	<div id="container">
		<div class="side-bar">
		</div> <!-- side-bar-->
		<div id="main">
			<div id="main-header">
			</div>
			<div id="main-body">
				<ul>
					<li>
						<div class="kn-list">
							<div class="list-logo"><img src="https://traskmatching.com/wp-content/uploads/2019/03/人物の無料素材.png"></div>
							<div class="list-content">
								<div class="username">忠宗</div>
								<div class="plan-title">ハイオク詰めまくりす</div>
							</div>
							<div class="list-btn"></div>
						</div>
					</li>
					<li>
						<div class="kn-list">
							<div class="list-logo"><img src="https://traskmatching.com/wp-content/uploads/2019/03/人物の無料素材.png"></div>
							<div class="list-content">
								<div class="username">小川</div>
								<div class="plan-title">欠陥住宅紹介します</div>
							</div>
							<div class="list-btn"></div>
						</div>
					</li>
					<li>
						<div class="kn-list">
							<div class="list-logo"><img src="https://traskmatching.com/wp-content/uploads/2019/03/人物の無料素材.png"></div>
							<div class="list-content">
								<div class="username">アキラ</div>
								<div class="plan-title">500円でベンチ温めます！！</div>
							</div>
							<div class="list-btn"></div>
						</div>
					</li>
					<li>
						<div class="kn-list">
							<div class="list-logo"><img src="https://traskmatching.com/wp-content/uploads/2019/03/人物の無料素材.png"></div>
							<div class="list-content">
								<div class="username">よっけ</div>
								<div class="plan-title">年中無休でシャカリキ頑張ります！！</div>
							</div>
							<div class="list-btn"></div>
						</div>
					</li>
				</ul>
			</div>
		</div> <!--main-->
	</div> <!--container-->
  </div>
</template>

<style>
div.about{
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
