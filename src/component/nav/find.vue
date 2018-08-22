<template>
	<main>
		<header>
			<h1	>发现最热门</h1>
			<router-link to="/msg">
				<span class="iconfont icon-letter span"></span>
			</router-link>
			
		</header>
		<nav>
			<ul>
				<li>
					<router-link to="/find">
						<img src="../../assets/images/ms_home_find_shicai@3x.png"/>
					</router-link>
				</li>
				<li>
					<router-link to="/find">
						<img src="../../assets/images/ms_home_find_caidan@3x.png"/>
					</router-link>
				</li>
				<li>
					<router-link to="/find">
						<img src="../../assets/images/ms_home_find_zhuanti@3x.png"/>
					</router-link>
				</li>
				<li>
					<router-link to="/find">
						<img src="../../assets/images/ms_home_find_wenzhang@3x.png"/>
					</router-link>
				</li>
			</ul>
		</nav>
		
		<div class="f_box">
			<div class="f_video">
				<h4>热门的视频菜谱</h4>	
				<span class="f_a">视频菜谱</span>
				<router-link to="/find">
					<p class="f_p">
						<img src="../../assets/images/20160516163203146338752389891.jpg"/>
						<em>日食记</em>
						<time>2017-05-31更新</time>
					</p>
					<div class="f_v">
						<img src="../../assets/images/20170531174704_320.png"/>
						<div>
							<div class="f_t">
								<p>看一遍就能学会的泡椒凤爪</p>
								<span>99393次播放</span>
							</div>
							<img src="../../assets/images/shipin.png"/>
						</div>
					</div>
				</router-link>
				
			</div>
			<div class="f_con" v-for="(v,i) in msg.data">
				<div class="f_like" v-for="(vv,ii) in msg.data[i].arr">
					<h4>{{vv.title}}</h4>
					<span class="f_a">{{vv.most}}</span>
					<div class="f_l_con">
						<img :src="vv.pic"/>
						<div class="f_l_right">
							<h5>{{vv.h5}}</h5>
							<ul>
								<li v-for="(vvv,iii) in msg.data[i].arr[ii].list">
									<img :src="vvv.pic"/>
								</li>
							</ul><br />
							<span class="f_l_time">{{vv.time}}</span><br />
							<span class="f_l_taste">{{vv.taste}}</span>
						</div>
					</div>
				</div>
				<div class="f_menu" v-for="(vv,ii) in msg.data[i].bars">
					<h4>{{vv.title}}</h4>
					<span class="f_a">{{vv.most}}</span>
					<div class="f_l_con">
						<ul>
							<li v-for="(vvv,iii) in msg.data[i].bars[ii].list">
								<router-link to="/find">
									<img :src="vvv.pic"/>
								</router-link>
							</li>
						</ul>
						<p>{{vv.type}}</p>
					</div>
				</div>
				<div class="f_active" v-for="(vv,ii) in msg.data[i].active">
					<h4>{{vv.title}}</h4>
					<span class="f_a">{{vv.most}}</span>
					<div class="f_l_con">
						<img :src="vv.pic"/>
					</div>
				</div>
			</div>
			<div class="f_video">
				<h4>热门的视频菜谱</h4>	
				<span class="f_a">视频菜谱</span>
				<router-link to="/find">
					<p class="f_p">
						<img src="../../assets/images/20160516163203146338752389891.jpg"/>
						<em>日食记</em>
						<time>2017-05-31更新</time>
					</p>
					<div class="f_v">
						<img src="../../assets/images/20170531174704_320.png"/>
						<div>
							<div class="f_t">
								<p>看一遍就能学会的泡椒凤爪</p>
								<span>99393次播放</span>
							</div>
							<img src="../../assets/images/shipin.png"/>
						</div>
					</div>
				</router-link>
				
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:{},
			}
		},
		mounted: function () {
		    var url="./src/data/find.json";
				this.$axios.get(url)
				.then((response)=>{
					console.log(response.data);
					this.msg=response.data;
				})
				.catch((error)=>{
					console.log(error)
				})
		},
	}
</script>

<style scoped>
	main{
		background: #f5f5f5;
		margin-bottom: 100px;
	}
	header{
		width: 100%;
		display: flex;
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		background: #fff;
		position: fixed;
		top: 0;
		z-index: 10;
	}
	header h1{
		flex-grow: 1;
		text-align: center;
		margin-left: 20px;
	}
	header .span{
		display: inline-block;
		width: 50px;
		height: 50px;
		text-align: center;
		font-size: 24px;
		color: #999;
	}	
	nav{
		width: 100%;
		overflow: hidden;
		background: #fff;
		border-bottom: 1px solid #e6e6e6;
		margin-top: 50px;
	}
	nav ul{
		width: 100%;
		display: flex;
		box-sizing: border-box;
		padding: 5px;
	}
	nav ul li{
		width: 25%;
		box-sizing: border-box;
		overflow: hidden;
		padding: 5px;
	}
	nav ul li img{
		width: 100%;
	}
	
	.f_box h4{
		width: 100%;
		font-size: 18px;
	}
	.f_box .f_a{
		display: inline-block;
		border: 1px solid #23aded;
		color: #23aded;
		font-size: 12px;
		margin: 10px 0;
	}
	.f_video,.f_like,.f_menu,.f_active{
		width: 100%;
		background: #fff;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		padding: 10px;
		box-sizing: border-box;
		margin-top: 10px;
	}
	.f_video .f_p{
		display: flex;
		width: 100%;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		margin: 10px 0;
	}
	.f_video .f_p img{
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
	.f_video .f_p em{
		flex-grow: 1;
		color: #000;
	}
	.f_video .f_p time{
		width: 100px;
		color: #999;
		font-size: 12px;
		text-align: right;
	}
	.f_video .f_v{
		width: 100%;
		position: relative;
	}
	.f_video .f_v>img{
		width: 100%;
	}
	.f_video .f_v>div{
		position: absolute;
		display: flex;
		bottom: 10px;
		width: 100%;
		box-sizing: border-box;
		padding: 0 10px;
	}
	.f_video .f_v>div img{
		width: 50px;
		height: 40px;
	}
	.f_video .f_v .f_t{
		flex-grow: 1;
		color: #fff;
		font-size: 14px;
	}
	.f_video .f_v .f_t span{
		font-size: 12px;
	}
	
	.f_like .f_l_con{
		display: flex;
		box-sizing: border-box;
	}
	.f_like .f_l_con h5{
		font-size: 14px;
		margin: 2px 0;
	}
	.f_like .f_l_con>img{
		width: 30%;
		height: 30%;
		margin-right: 10px;
	}
	.f_like .f_l_right{
		flex-grow: 1;
	}
	.f_like .f_l_right li{
		float: left;
		margin-right: 5px;		
	}
	.f_like .f_l_right li img{
		width: 14px;
		height: 14px;
	}
	.f_like .f_l_right span{
		color: #999;
		font-size: 12px;
		height: 20px;
		line-height: 20px;
		width: 100%;
		display: inline-block;
		padding: 0 18px;
		box-sizing: border-box;
	}
	.f_like .f_l_right .f_l_time{
		background: url(../../assets/images/cp_con_icon_sj@3x.png) no-repeat;
		background-size: 15px;
		background-position-y: 2px;
	}
	.f_like .f_l_right .f_l_taste{
		background: url(../../assets/images/cp_con_icon_kw@3x.png) no-repeat;
		background-size: 15px;
		background-position-y: 4px;
	}
	
	.f_menu .f_l_con{
		text-align: center;
	}
	.f_menu .f_l_con ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.f_menu .f_l_con ul li{
		width: 33.33%;
		box-sizing: border-box;
		padding: 0 5px;
	}
	.f_menu .f_l_con ul li:last-child{
		margin-left: 33.33%;
	}
	.f_menu .f_l_con li img{
		width: 100%;
	}
	.f_menu .f_l_con p{
		font-size: 14px;
	}
	
	.f_active .f_l_con img{
		width: 100%;
	}
</style>