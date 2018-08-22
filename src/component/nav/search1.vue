<template>
	<div class="search1">
		<header>
			<span @click="back">返回</span>
			<input type="text" placeholder="菜谱名、食材名" />
			<button>搜索</button>
		</header>
		<div class="tip">
			请输入要搜索的关键字
		</div>
		<div class="box" id="box">
			<div class="like">
				<h2>猜你喜欢</h2>
				<ul>
					<li v-for="(v,i) in msg.like">
						<router-link to="/search1">
							<img :src="v.pic"/>
							<p>{{v.con}}</p>
						</router-link>						
					</li>				
				</ul>
			</div>
			<div class="like">
				<h2>早餐推荐</h2>
				<ul>
					<li v-for="(v,i) in msg.recom">
						<img :src="v.pic"/>
						<p>{{v.con}}</p>
					</li>
				</ul>
			</div>
			<div class="like">
				<div class="hot_tit">
					<h2>热门分类</h2>
					<span @click="back">></span>
				</div>				
				<ul class="hot">
					<li v-for="(v,i) in msg.hot[0].list">{{v.con}}</li>
				</ul>
				<ul>
					<li v-for="(v,i) in msg.hot[0].bars">
						<img :src="v.pic"/>
						<p>{{v.con}}</p>
					</li>
				</ul>
			</div>
			<div class="like">			
				<div class="hot_tit">
					<h2>热门推荐</h2>
					<span @click="back">></span>
				</div>
				<div class="hot_recom" v-for="(v,i) in msg.hot_recom">
					<ul class="hot_con">
						<li v-for="(vv,ii) in msg.hot_recom[i].list">
							<router-link :to="vv.link">
								<img :src="vv.pic"/>
								<div class="con_right">
									<h4>{{vv.title}}</h4>
									<p>{{vv.count}}浏览</p>
								</div>
							</router-link>						
						</li>
					</ul>
					<div class="hot_food" v-for="(vv,ii) in msg.hot_recom[i].bars">
						<h4>{{vv.title}}</h4>
						<ul>
							<li v-for="(vvv,iii) in msg.hot_recom[i].bars[ii].images">
								<router-link :to="vvv.link">
									<img :src="vvv.pic"/>
								</router-link>						
							</li>
						</ul>
					</div>
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:{}
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted:function(){
			 var url="./src/data/search1.json";
				this.$axios.get(url)
				.then((response)=>{
					console.log(response.data);
					this.msg=response.data;
				})
				.catch((error)=>{
					console.log(error)
				})
		}
	}
</script>

<style scoped>
	.like a{
		color: black;
	}
	.search1{
		width: 100%;
		background: #f5f5f5;
		position: absolute;
		z-index: 10;
	}
	header{
		width: 100%;
		height: 50px;
		background: #fff;
		font-size: 14px;
		display: flex;
		text-align: center;
		padding: 8px 10px;
		box-sizing: border-box;
	}
	header span{
		width: 50px;
		height: 35px;
		display: inline-block;
		line-height: 35px;
		color: #666;
		margin-right: 20px;
	}
	header button{
		width: 80px;
		height: 35px;
		border: none;
		color: #fff;
		background: #ff4c39;
		border-radius: 3px;
		margin-left: 10px;
	}
	header input{
		outline: none;
		flex-grow: 1;
		height: 35px;
		border: none;
		background: #eee;
		border-radius: 5px;
		box-sizing: border-box;
		padding: 0 10px;
	}
	.tip{
		color: #666;
		width: 100%;
		height: 60px;
		line-height: 60px;
		text-align: center;
		background: #fff;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
	.box{
		box-sizing: border-box;
		padding: 20px 0;
	}
	.box h2{
		font-size: 20px;
		margin: 15px 0;
	}
	.box ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.box ul li{
		width: 33.33%;
		box-sizing: border-box;
		text-align: center;
		padding-right: 8px;
		padding-bottom: 10px;
	}
	.box ul li img{
		width: 100%;
	}
	.box ul li p{
		font-size: 14px;
	}
	.like{
		width: 100%;
		background: #fff;
		padding: 20px 5px 0 15px;
		box-sizing: border-box;
		border-top: 1px solid #eee;
	}
	.like ul li p{
		width: 90%;
		height: 25px;
		line-height: 25px;
		overflow: hidden;
		text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	.like .hot{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 10px 0;
	}
	.like .hot li{
		width: 25%;
		height: 30px;
		line-height: 40px;
		padding: 0 17px;
		overflow: hidden;
		text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	.like .hot_tit{
		width:100%;
		display:flex;
	}
	.like .hot_tit h2{
		flex-grow: 1;
	}
	.like .hot_tit span{
		width:30px;
		height:30px;
		display: inline-block;
		color: #999;
		margin: 15px 0;
	}
	.like .hot_con{
		width: 100%;
	}
	.like .hot_con li{
		width: 100%;		
		border-bottom: 1px solid #eee;
		margin: 10px 0;
	}
	.like .hot_con li a{
		width: 100%;
		display: flex;
	}
	.like .hot_con li img{
		width: 100px;
		height: 100px;
		margin-right: 10px;		
	}
	.like .hot_con .con_right{
		text-align: left;
		flex-grow: 1;
	}
	.like .hot_con .con_right h4{
		margin-bottom: 10px;
		line-height: 24px;	
		overflow: hidden;
		text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
	}
	.like .hot_con .con_right p{
		font-size: 12px;
		color: #999;
	}
	.like .hot_food h4{
		margin-bottom: 10px;
	}
	.like .hot_food ul{
		border-bottom: 1px solid #eee;
	}
</style>