<template>
	<div class="detail">
		<header>
			<span @click="back"><美食杰</span>
			<div>	
				<router-link to="/detail">
					<span class="iconfont icon-fangdajing d_search"></span>
				</router-link>
				<router-link to="/detail">
					<span class="type">菜谱分类></span>
				</router-link>
			</div>			
		</header>
		<div class="box">
			<div class="d_box" :style="{backgroundImage: 'url(' + msg.pic + ')' }">
			</div>
			<div class="main">
				<div class="type">
					<h1>{{msg.title}}</h1>
					<em>{{msg.count}}人收藏</em>
					<em>{{msg.num}}人浏览</em>
					<ul>
						<li v-for="(v,i) in msg.list">
							<router-link to="/detail">
								{{v.con}}
							</router-link>
						</li>
					</ul>
				</div>
				<div class="attention">
					<div>
						<span class="photo"><img :src="msg.photo"/></span>
						<div class="d_con">
							<h5>{{msg.author}}</h5>
							<p>发布{{msg.publish}}篇菜谱</p>
						</div>
						<span class="d_act">关注</span>
					</div>
					<p>{{msg.con}}</p>
				</div>
				<div class="mark">
					<div>
						<div class="star">
							<h2>评分</h2>
							<ul>
								<li v-for="i in msg.star"></li>
								<li class="no" v-for="i in (5-msg.star)"></li>
							</ul>
						</div>
						<ul class="d_m">
							<li><span></span>{{msg.type}}</li>
							<li><span></span>{{msg.taste}}</li>
							<li><span></span><{{msg.time}}分钟</li>
							<li><span></span>{{msg.hot}}</li>
						</ul>
					</div>
					<span>
						
					</span>
				</div>
				<div class="mark mater">
					<div class="star">
						<h2>主料</h2>
						<p>{{msg.mater}}人份</p>
					</div>
					<div>
						<span v-for="(v,i) in msg.materlist"><em class="name">{{v.name}}</em><em>{{v.count}}、</em></span>
					</div>
				</div>
				<div class="mark mater">
					<div class="star">
						<h2>主料</h2>
					</div>
					<div>
						<em>数量</em><em>数量</em><em>数量</em><em>数量</em><em>数量</em><em>数量</em>
					</div>
				</div>
				<div class="step">
					<h2>{{msg.title}}</h2>
					<div class="d_step" v-for="(v,i) in msg.step">
						<h3>{{v.title}}</h3>
						<img :src="v.pic"/>
						<p>{{v.con}}</p>
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
				msg:{},
				n:this.$store.state.num,
				m:this.$store.state.page,
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted: function () {
		    var url="./src/data/detail.json";
				this.$axios.get(url)
				.then((response)=>{
					console.log(response);
					this.msg=response.data.data[this.m].page[this.n];
					console.log(this.msg)
				})
				.catch((error)=>{
					console.log(error)
				})
		}
	}
</script>

<style scoped>
	.detail{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		position: absolute;
		z-index: 5;
	}
	header{
		width: 100%;
		height: 50px;
		position: fixed;
		box-sizing: border-box;
		padding: 10px 15px;
		font-size: 14px;
		color: #fff;
		display: flex;
	}
	header a{
		color: #fff;
	}
	header>span{
		text-align: center;
		display: inline-block;
		width: 70px;
		height: 30px;
		line-height: 30px;
		background: rgba(0,0,0,0.6);
		border-radius: 30px;
	}
	header>div{
		flex-grow: 1;
		height: 30px;
		line-height: 30px;
		text-align: right;
	}
	header>div span{
		display: inline-block;
		height: 30px;
	}
	header .d_search{
		width: 30px;
		text-align: center;
		background: rgba(0,0,0,0.6);
		border-radius: 50%;
		font-size: 20px;
		margin-right: 10px;
	}
	header .type{
		width: 90px;
		text-align: center;
		background: rgba(0,0,0,0.6);
		border-radius: 30px;
	}

	.box .d_box{
		width: 100%;
		height: 216px;
		background: url(../../assets/images/s2654771_153460237711195.jpg) no-repeat;
		background-size: 100%;
		background-position: 0 -120px;
	}
	.box .type{
		width: 100%;
		background: #fff4d6;
		box-sizing: border-box;
		padding: 20px 15px;
	}
	.box .type h1{
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.box .type em{
		font-size: 12px;
		color: #666;
		margin-right: 10px;
	}
	.box .type ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
	}
	.box .type ul li{
		font-size: 12px;
		margin-right: 10px;	
		line-height: 20px;	
	}
	.box .type ul li a{
		color: #eaa46e;
		text-decoration: underline;
	}

	.box .attention,.box .mark,.box .step{
		width: 100%;
		background: #fff;
		box-sizing: border-box;
		padding: 20px 15px;
	}
	.box .attention>div{
		display: flex;
		font-size: 12px;
		color: #999;
	}
	.box .attention .photo{
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 10px;
	}
	.box .attention .photo img{
		width: 100%;
	}
	.box .attention>div h5{
		font-size: 14px;
		color: black;
		margin-bottom: 5px;
	}
	.box .attention .d_act{
		display: inline-block;
		border: 1px solid #ff4c39;
		color: #ff4c39;
		width: 50px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		border-radius: 30px;
		font-size: 13px;
	}
	.box .attention .d_con{
		flex-grow: 1;
	}
	.box .attention>p{
		margin: 15px 0;
		font-size: 14px;
	}
	
	.box .mark {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		border-top: 1px solid #eee;
		position: relative;
	}
	.box .mark .star{
		width: 100%;
		height: 36px;
		line-height: 36px;	
		display: flex;	
	}
	.box .mark .star h2{
		font-size: 14px;
		font-weight: bold;
		width: 36px;		
	}
	.box .mark .star ul{
		display: flex;
		flex-grow: 1;
		padding: 7px 0;
    	box-sizing: border-box;
	}
	.box .mark .star ul li{
		width: 21px;
		height: 21px;
		margin-right: 5px;
		background: url(../../assets/images/wap2017icons1.png) no-repeat;
		background-position: 0 -76px;
		background-size: 1400%;
	}
	.box .mark .star ul .no{
		width: 21px;
		height: 21px;
		margin-right: 5px;
		background: url(../../assets/images/wap2017icons1.png) no-repeat;
		background-position: -23px -76px;
		background-size: 1400%;
	}
	.box .mark .d_m{
		flex-grow: 1;
		display: flex;
		flex-wrap: wrap;
	}
	.box .mark .d_m li{
		width: 50%;
		font-size: 14px;
		color: #666;
		box-sizing: border-box;
		padding: 5px 0;
	}
	.box .d_m li span{
		display: inline-block;
		background: red;
		width: 20px;
		height: 22px;
		background: url(../../assets/images/wap2017icons1.png) no-repeat;
		background-size: 1800%;
		background-position: 0 3px;
		margin-right: 5px;
	}
	.box .d_m li:nth-of-type(2) span{
		background: url(../../assets/images/wap2017icons1.png) no-repeat;
		background-size: 1800%;
		background-position: -20px 3px;
	}
	.box .d_m li:nth-of-type(3) span{
		background: url(../../assets/images/wap2017icons1.png) no-repeat;
		background-size: 1800%;
		background-position: -45px 3px;
	}
	.box .d_m li:nth-of-type(4) span{
		background: url(../../assets/images/wap2017icons1.png) no-repeat;
		background-size: 1800%;
		background-position: -65px 3px;
	}
	.box .mark>span{
		display: inline-block;
		width: 48px;
		height: 80px;
		background: url(../../assets/images/wap2017icons1.png) no-repeat;
		background-size: 835%;
		background-position: 0 -25px;
		position: absolute;
		right: 15px;
	}
	.box .mark>div{
		flex-grow: 1;
		display: flex;
		flex-wrap: wrap;
	}
	
	.box .mater{
		font-size: 13px;
	}
	.box .mater .star p{
		color: #999;
		font-size: 14px;
	}
	.box .mater .name{
		color: #ff4c39;
	}
	
	.box .step{
		text-align: center;
	}
	.box .step img{
		width: 100%;
		margin: 10px 0;
	}
	.box .d_step{
		margin-top: 30px;
		font-size: 14px;
	}
	.box .d_step h3{
		font-size: 16px;
	}
</style>