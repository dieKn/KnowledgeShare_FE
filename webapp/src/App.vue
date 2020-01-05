<template>
  <div id="app">
	<header>
		<div class="inner">
			<div id="logo">
				<router-link to="/top"><img src="https://menta.imgix.net/resource/img/logo.png?auto=compress,format" loading="lazy"></router-link>
			</div>
			<div class="right-nav">
				<div class="search">
					<form method="GET" action="https://menta.work/plan" accept-charset="UTF-8">
						<div class="relative m-r2">
							<input id="q" class="" placeholder="PHPなどスキル名で検索" name="q" type="text"><div class="absolute center-v right-1 gray2 header_search"><i class="fas fa-search"></i></div>
						</div>
					</form>
				</div>
				<div class="loginbtn"><router-link to="/login">ログイン</router-link></div>
				<div class="loginbtn"><a href="/register" class="btn hanten free_submit">無料登録</a></div>
			</div>
		</div><!-- inner -->
	</header>
	<router-view/>
  </div>
</template>
<script>
import 'normalize.css'

export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
