<template>
	<main>
		<header>
			<span class="iconfont icon-jiahao"  @click="show" >
				<div class="add" v-show="flag" @click.stop="showtrue">
					<ul>
						<li>
							<router-link to="/recom">
								<img src="../../assets/images/sys_pic@3x.png"/>
								<em>晒作品</em>
							</router-link>						
						</li>
						<li>
							<router-link to="/recom">
								<img src="../../assets/images/sys_sc@3x.png"/>
								<em>传菜谱</em>
							</router-link>
							
						</li>
					</ul>
				</div>
			</span>
			<router-link to="/search1" class="a">
				<div class="search">
					<span class="iconfont icon-fangdajing"></span>
					<p>搜索你感兴趣的</p>
				</div>
			</router-link>
			<router-link to="/msg">
				<span class="iconfont icon-letter"></span>
			</router-link>
			
		</header>
		<div class="banner" id="recom">
			<mt-swipe :auto="0">
			   <mt-swipe-item v-for="(v,i) in msg.banner">
			  	<div @click="page(i)">
			  		<ul>
			  			<li v-for="(vv,ii) in msg.banner[i].page.list"  @click="add(ii)" 
			  				:style="{backgroundImage: 'url(' + vv.pic + ')' }">
			  				<router-link to="/detail">
			  					<div class="txt">			  					
				  					<div>
				  						<h3>{{vv.title}}</h3>
					  					<p>{{vv.tips}}</p>
				  					</div>
				  				</div>
			  				</router-link>			  				
			  			</li>
			  		</ul>
			  		<h4>{{v.page.title}}</h4>
			  		<p class="p">{{v.page.con}}</p>
			  	</div>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<nav>
			<ul>
				<li>
					<router-link to="/find">菜谱分类</router-link>
				</li>
				<li>
					<router-link to="/find">视频菜谱</router-link>
				</li>
				<li>
					<router-link to="/find">晚餐</router-link>
				</li>
				<li>
					<router-link to="/find">附近</router-link>
				</li>
			</ul>
		</nav>
		<div class="recom">
			<h2>今日推荐</h2>
			<ul>
				<li v-for="(v,i) in msg.recom">
					<router-link to="/my">
						<img :src="v.pic"/>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="ylike">
			<div class="like">
				<span class="iconfont icon-cainixihuan"></span>
				<div>
					<h2>猜你喜欢</h2>
					<p>19:29为您更新</p>
				</div>
				
			</div>
			<ul>
				<li v-for="(v,i) in msg.ylike">
					<router-link to="/my">
						<img :src="v.pic"/>
						<p>{{v.con}}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</main>
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
		    var url="./src/data/recom.json";
				this.$axios.get(url)
				.then((response)=>{
					console.log(response.data);
					this.msg=response.data;
				})
				.catch((error)=>{
					console.log(error)
				})
		},
		methods:{
			show(){
				this.flag=!this.flag
			},
			showtrue(){
				this.flag=true
			},
			add(n){
				this.$store.commit('add',n)
			},
			page(m){
				this.$store.commit('page',m)
			}
		}
	}
</script>

<style scoped>
	main{
		margin-bottom: 100px;
	}
	header{
		width: 100%;
		display: flex;
		height: 50px;
		box-sizing: border-box;
		text-align: center;
		color: #666;
		background: #fefefe;
		position: fixed;
		z-index: 5;
		top: 0;
		
	}
	header span{
		width: 50px;
		height: 50px;
		line-height: 50px;
		display: inline-block;
		font-size: 24px;
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
		padding: 0 10px;
	}
	header .add ul li img{
		width: 30px;
		height: 30px;
		margin-top: 10px;
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
	header a{
		color: #999;
	}
	header .a{
		flex-grow: 1;	
	}
	header .search{
		display: flex;
		width: 100%;
		height: 35px;
		line-height: 35px;
		background: #f5f5f5;
		border-radius: 5px;
		margin: 7px 3px;
		font-size: 12px;
		text-align: center;
	}
	header .search span{
		display: inline-block;
		width: 40%;
		height: 35px;
		line-height: 35px;
		font-size: 20px;
		text-align: right;
	}
	header .search p{
		flex-grow: 1;
		text-align: left;
	}
	
	.banner{
		width: 100%;
		background: #f5f5f5;
		text-align: center;
		color: #666;
		padding: 10px;
		padding-top: 50px;			    
	    box-sizing: border-box;
	    overflow: hidden;
	}
	.banner ul{
		width: 100%;
	}
	.banner ul li{
		width: 100%;
		background: blanchedalmond;
		margin-bottom: 10px;
		overflow: hidden;
		position: relative;
		box-sizing: border-box;
		padding-bottom: 38%;	
		background-size: 100%;
		background-position: 0 -50px;
		background-repeat: no-repeat;	
	}
	.banner ul li img{
		width: 100%;
	}
	.banner ul li .txt{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 3;
		top: 0;
		color: #fff;
		font-weight: bold;
		font-size: 12px;
		background: url(../../assets/images/20160308103254_342.png) no-repeat;
		background-size: 100% 100%;
		text-align: left;
	}
	.banner ul .txt>div{
		position: absolute;
		bottom: 10px;
		left: 20px;
	}
	.banner ul .txt h3{
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 5px;
	}
	.banner .p{
		font-size: 12px;
	}
	.banner h4{
		margin: 5px 0;
	}
	nav{
		width: 100%;
		z-index: 5;
	}
	nav ul{
		width: 100%;
		display: flex;
	}
	nav ul li{
		width: 25%;
		padding-bottom: 40%;
		position: relative;
	}
	nav ul li:nth-of-type(1){
		background: url(../../assets/images/quanbunew.png) no-repeat;
		background-size: 75%;
		background-position: center center;
	}
	nav ul li:nth-of-type(2){
		background: url(../../assets/images/kuaishoucainew.png) no-repeat;
		background-size: 75%;
		background-position: center center;
	}
	nav ul li:nth-of-type(3){
		background: url(../../assets/images/shipincaipunew.png) no-repeat;
		background-size: 75%;
		background-position: center center;
	}
	nav ul li:nth-of-type(4){
		background: url(../../assets/images/fujinnew.png) no-repeat;
		background-size: 75%;
		background-position: center center;
	}
	nav ul li a{
		width: 50px;
		display: block;
		color: #333;
		font-size: 12px;
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -25px;
	}

	.recom{
		width: 100%;
		text-align: center;
		margin: 30px 0;
	}
	.recom h2{
		font-size: 18px;
		margin: 10px 0;
	}
	.recom ul{
		width: 100%;
	}
	.recom ul li{
		width: 100%;
		padding: 10px 15px 0;
		overflow: hidden;
		box-sizing: border-box;
	}
	.recom img{
		width: 100%;
	}
	
	.ylike{
		width: 100%;
		text-align: center;
	}
	.ylike ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;	
		overflow: hidden;
	}
	.ylike ul li{
		width: 50%;
		box-sizing: border-box;
		position: relative;
		padding-top: 10px;
	}
	.ylike ul li:nth-child(odd){
		padding-right: 5px;
		padding-left: 10px;
	}
	.ylike ul li:nth-child(even){
		padding-left: 5px;
		padding-right: 10px;
	}
	.ylike ul li img{
		width: 100%;
	}
	.like{
		width: 100%;
		display: flex;
	}
	.like span{
		color: #ff796a;
		font-size: 36px;
		width: 40%;
		text-align: right;
		display: inline-block;
		margin-right: 10px;
	}
	.like>div{
		flex-grow: 1;
		text-align: left;
	}
	.like>div h2{
		font-size: 18px;
	}
	.like>div p{
		font-size: 12px;
		color: #666;
	}
	.ylike>ul p{
		color: #fff;
		position: absolute;
		bottom: 10px;
		font-size: 14px;
		width: 90%;
		height: 30px;
		line-height: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
</style>