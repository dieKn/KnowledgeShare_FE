<template>
	<div id="planList">
		<div id="main">
			<div id="main-header">
			</div>
			<div id="main-body">
				<ul>
					<li v-for="user in users">
						<div class="kn-list">
                            <div class="list-logo"><img src="https://traskmatching.com/wp-content/uploads/2019/03/人物の無料素材.png" /></div>
                            <div class="list-content">
                                <div class="username">{{ user.name }}</div>
                                <div class="plan-title"><a href="./plan-detail/123">{{ user.title }}</a></div>
                            </div>
                            <div class="list-btn"></div>
                        </div>
					</li>
					</li>
				<!--<li>
						<div class="kn-list">
							<div class="list-logo"><img src="https://traskmatching.com/wp-content/uploads/2019/03/人物の無料素材.png"></div>
							<div class="list-content">
								<div class="username">よっけ</div>
								<div class="plan-title"><a href="">年中無休でシャカリキ頑張ります！！</a></div>
							</div>
							<div class="list-btn"></div>
						</div>
					</li> -->
				</ul>
			</div>
		</div> <!--main-->
	</div>
</template>
<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
	import {User} from "@/model/User";
	import axios from "axios";
	@Component
    export default class HabitList extends Vue{
		//public user: User = new User(0, "test0", "user0");
		users: User[] = []
		mounted() {
			this.onClickApi();
		}
		//methods
		public onClickApi(){
			main('http://192.168.33.17:8001/test')
			.then(res => {
				console.log(res);
				this.users = res 
				console.log(this.users);
			});
		}
		

		export async function main(url: string) {
			try {
			  const { data } = await axios.get(url);
			  return data;  // { message: "Real response!" }
			} catch (err) {
			  throw new Error(err.message);
			}
		}
	}
</script>
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
