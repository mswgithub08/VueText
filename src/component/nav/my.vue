<template>
	<div class="my">
		<header>			
			<div>
				<router-link to="/my">
					<span><img src="../../assets/images/tx2_4.png"/></span>
					<div class="m_con">
						<h2>杰米6616746940</h2>
						<p>正在通往美食达人的路上...</p>
					</div>					
				</router-link>						
			</div>
			<p>美食杰DNA 0条></p>	
		</header>
		<nav>
			<ul>
				<li><em>0</em>关注</li>
				<li><em>0</em>粉丝</li>
				<li><em>0</em>菜谱</li>
			</ul>
		</nav>
		<div class="honor">
			<h2>荣誉勋章</h2>
			<ul>
				<li><img src="../../assets/images/sousuo.png"/></li>
				<li><img src="../../assets/images/caipu1.png"/></li>
				<li><img src="../../assets/images/kouwei1.png"/></li>
				<li><img src="../../assets/images/caixi1.png"/></li>
				<li><img src="../../assets/images/zucai1.png"/></li>
				<li><img src="../../assets/images/caixi1.png"/></li>
				<li><img src="../../assets/images/zuopin1.png" alt="" /></li>
			</ul>
		</div>
		<ul>
			<li></li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.my{
		background: #f5f5f5;
		width: 100%;
		height: 100%;
	}
	header{
		width: 100%;
		background: url(../../assets/images/home_bgOnline@3x.png) no-repeat;
		background-size: 100% 100%;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 20px 30px 10% 30px;
	}
	header a{
		color: #fff;
		font-size: 12px;
		font-weight: bold;
	}
	header>div{
		width: 100%;
	}
	header>div a{
		width: 100%;
		display: flex;
	}
	header span{
		display: inline-block;
		width: 72px;
		height: 72px;
		border-radius: 50%;
		overflow: hidden;
		box-sizing: border-box;
		border: 2px solid #ffcbbf;
		margin-right: 15px;
	}
	header span img{
		width: 100%;
	}
	header .m_con{
		flex-grow: 1;
		padding: 20px 0;
	}
	header .m_con h2{
		font-size: 14px;
		margin-bottom: 10px;
		font-weight: bold;
	}
	header>p{
		font-size: 12px;
		color: #fff;
		border: 1px solid #fff;
		padding: 3px 15px;
		border-radius: 30px;
		background: #fea39c;
		margin: 0 auto;
	}
	
	nav{
		width: 100%;
		background: #fff;
	}
	nav ul{
		width: 100%;
		display: flex;
	}
	nav ul li{
		width: 33.33%;
		text-align: center;
		color: #999;
		font-size: 14px;
		height: 40px;
		line-height: 40px;
	}
	nav ul li em{
		color: #fb6358;
		margin-right: 5px;
	}
	
	.honor{
		width: 100%;
		padding-bottom: 10%;
		background: red;
	}
	.honor ul{
		width: 100%;
		display: flex;
	}
	
</style>