<template>
	<div class="chat">
		<header>
			<span class="iconfont icon-jiahao" @click="show" >
				<div class="add" v-show="flag" @click.stop="showtrue">
					<ul>
						<li>
							<router-link to="/chat">
								<img src="../../assets/images/sys_pic@3x (1).png"/>
								<em>晒作品</em>
							</router-link>						
						</li>
						<li>
							<router-link to="/chat">
								<img src="../../assets/images/h_sys_sh@3x.png"/>
								<em>传菜谱</em>
							</router-link>
							
						</li>
					</ul>
				</div>
			</span>
			<h1>食话</h1>
			<router-link to="/search2">
				<span class="iconfont icon-fangdajing"></span>
			</router-link>			
			<span><img src="../../assets/images/home_talk_attention@3x.png"/></span>
		</header>
		<div class="banner" id="chat">
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="(v,i) in msg.banner">
			  	<img :src="v.pic"/>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<nav>
			<ul>
				<li>
					<router-link to="/find">餐桌时光</router-link>
				</li>
				<li>
					<router-link to="/find">玩转烘焙</router-link>
				</li>
				<li>
					<router-link to="/find">美食课堂</router-link>
				</li>
				<li>
					<router-link to="/find">最IN活动</router-link>
				</li>
			</ul>
		</nav>
		<div class="box">
			<ul class="tit">
				<li class="new check">最新</li>
				<li class="hot">最热</li>
			</ul>
			<ul class="ch">
				<li v-for="(v,i) in msg.box">
					<span><img :src="v.pic" /></span>
					<div class="con">
						<h3>{{v.author}}</h3>
						<p>
							<em>2018-08-14发布&nbsp;来自</em>&nbsp;{{v.from}}
						</p>
						<h2>{{v.title}}</h2>
						<ul>
							<li v-for="(vv,ii) in msg.box[i].list">
								<img :src="vv.pic"/>
							</li>
						</ul>
						 <div class="right">
						 	<span>
						 		<img src="../../assets/images/comment24@3x.png"/>
						 		{{v.word}}
						 	</span>
						 	<span>
						 		<img src="../../assets/images/xihuan.png"/>
						 		{{v.like}}
						 	</span>
						 </div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:{},
				flag:false
			}
		},
		mounted: function () {
		    var url="./src/data/chat.json";
				this.$axios.get(url)
				.then((response)=>{
					console.log(response.data);
					this.msg=response.data;
				})
				.catch((error)=>{
					console.log(error)
				});
			$('.box .tit li').on('click',function(){
				$(this).addClass('check');
				$(this).siblings().removeClass('check')
			})
		},
		methods:{
			show(){
				this.flag=!this.flag
			},
			showtrue(){
				this.flag=true
			}
		}
	}
	
</script>

<style scoped>
	header{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		display: flex;
		background: white;
		font-size: 18px;
		position: fixed;
		top: 0;
		z-index: 5;
	}
	header span{
		width: 50px;
		height: 50px;
		font-size: 24px;
		color: #999;
	}
	header img{
		width: 80%;
		margin-right: 10px;
	}
	header h1{
		flex-grow: 1;
	}
		header .add{
		background: #333;
		width: 100px;
		height: 100px;
		border-radius: 5px;
		position: relative;
		top: 5px;
		left: 10px;
	}
	header .add ul{
		width: 100%;
		height: 100%;
		position: relative;		
	}
	header .add ul li{
		width: 100%;
		height: 50px;
		box-sizing: border-box;
		font-size: 16px;	
		border-bottom: 1px solid #666;	
	}
	header .add ul li a{
		color: #fff;
		display: flex;
		padding: 0 5px;
	}
	header .add ul li img{
		width: 30px;
		height: 30px;
		margin-top: 10px;
		margin-right: 0;
	}
	header .add ul li em{
		flex-grow: 1;
	}
	header .add ul::before{
		content: '';
		width: 10px;
		height: 10px;
		background: #333;
		position: absolute;
		transform: rotate(45deg);
		top: -5px;
		left: 10px;
	}
	.banner{
		background: #f5f5f5;
		width: 100%;
		overflow: hidden;
		margin-top: 50px;
	}
	.banner img{
		width: 100%;
	}
	nav{
		width: 100%;
	}
	nav ul{
		width: 100%;
		display: flex;
	}
	nav ul li{
		width: 25%;
		box-sizing: border-box;
		text-align: center;
		padding-bottom: 35%;
		position: relative;
	}
	nav ul li a{
		width: 50px;
		display: block;
		color: #666;
		font-size: 12px;
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -25px;
	}
	nav ul li:nth-of-type(1){
		background: url(../../assets/images/zhms1.png) no-repeat;
		background-size: 65%;
		background-position: center center;
	}
	nav ul li:nth-of-type(2){
		background: url(../../assets/images/bake1.png) no-repeat;
		background-size: 65%;
		background-position: center center;
	}
	nav ul li:nth-of-type(3){
		background: url(../../assets/images/question1.png) no-repeat;
		background-size: 65%;
		background-position: center center;
	}
	nav ul li:nth-of-type(4){
		background: url(../../assets/images/exercise1.png) no-repeat;
		background-size: 65%;
		background-position: center center;
	}
	.banner .mint-swipe-indicator.is-active{
		background: red;
	}
	.box{
		width: 100%;
		box-sizing: border-box;
		padding: 30px 15px;
		
	}
	.box .tit{
		width: 200px;
		height: 30px;
		line-height: 30px;
		margin: 0 auto;
		display: flex;
		border: 1px solid #ff4c35;
		font-size: 12px;
		border-radius: 5px;
		margin-bottom: 30px;
	}
	.box .tit li{
		width: 50%;
		text-align: center;		
	}
	.box .tit .check{
		background: #ff4c35;
	}
	.box .ch>li{
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid #ccc;
		margin-bottom: 20px;
	}
	.box .ch>li>span{
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
	.box .ch>li>span img{
		width: 30px;
		height: 30px;
	}
	.box .ch>li .con{
		flex-grow: 1;
		box-sizing: border-box;
	}
	.box .con h3{
		color: red;
		font-size: 14px;
	}
	.box .con h2{
		margin: 10px 0;
		width: 100%;
		font-size: 16px;
		line-height: 24px;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
	}
	.box .con p{
		font-size: 12px;
		color: blue;
	}
	.box .con em{
		color: #999;
	}
	.box .con ul{
		display: flex;
		flex-wrap: wrap;
	}
	.box .con ul li{
		width: 33.33%;
		box-sizing: border-box;
		padding-right: 10px;
		padding-bottom: 10px;
	}
	.box .con ul li img{
		width: 100%;
		height: 100%;
	}
	.box .right{
		color: #999;
		width: 90px;
		height: 40px;
		line-height: 20px;
		float: right;
	}
	.box .right span{
		width: 12px;
		height: 12px;
		font-size: 12px;
		margin-left: 10px;
	}
	.box .right img{
		width: 12px;
	}
</style>