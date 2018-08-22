<template>
	<div class="msg">
		<header>
			<span @click="back"><返回</span>
			<h1>消息</h1>
		</header>
		<div class="box">
			<ul>
				<li>
					<img src="../../assets/images/pl_zan.png"/>
					<p>评论和喜欢</p>
				</li>
			</ul>
			<div class="load">
				<p @click="show" v-show="pflag">点击加载更多</p>
				<img src="../../assets/images/theend@3x.png" v-show="flag"/>
			</div>			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:false,
				pflag:true
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			show(){
				this.flag=true;
				this.pflag=false
			}
		}
	}
</script>

<style scoped>
	.msg{
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		position: absolute;
		z-index: 10;
	}
	header{
		width: 100%;
		display: flex;
		text-align: center;
		height: 50px;
		line-height: 50px;
		position: fixed;
		top: 0;
		background: #fff;
		padding: 0 15px;
		box-sizing: border-box;
	}
	header span{
		color: #ff5555;
		width: 50px;
		height: 50px;
	}
	header h1{
		flex-grow: 1;
		font-size: 18px;
		padding-right: 30px;
	}
	.box{
		margin-top: 50px;
	}
	.box>ul{
		width: 100%;
	}
	.box>ul>li{
		width: 100%;
		display: flex;
		padding: 15px;
		border-bottom: 1px solid #eee;
	}
	.box>ul>li img{
		width: 50px;
		height: 50px;
		margin-right: 15px;
	}
	.box>ul>li p{
		font-size: 14px;
	}
	.box .load{
		position: relative;
	}
	.box .load p{
		color: #ff5555;
		text-align: center;
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	.box .load img{
		position: absolute;
		top: 0;
	}
</style>