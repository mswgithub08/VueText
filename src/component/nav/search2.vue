<template>
	<div class="search2">
		<header>
			<span @click="back">取消</span>
			<input type="text" placeholder="活动/话食"/>
			<span>搜索</span>
		</header>
		<ul>
			<li v-for="(v,i) in msg.list">
				<div class="s_con">
					<img src="../../assets/images/zhms.png"/>
					<p>{{v.con}}</p>
				</div>
				<span>
					{{v.type}}
				</span>
			</li>
		</ul>
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
			 var url="./src/data/search2.json";
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
	.search2{
		background: #eee;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 10;
	}
	header{
		background: #fff;
		width: 100%;
		height: 50px;
		position: fixed;
		box-sizing: border-box;
		display: flex;
		padding: 10px;
	}
	header span{
		width: 50px;
		height: 30px;
		display: inline-block;
		color: #fd5050;
		line-height: 30px;
		text-align: center;
	}
	header input{
		flex-grow: 1;
		border: none;
		outline: none;
		height: 30px;
		line-height: 30px;
		background: #eee;
		border-radius: 5px;
		padding: 0 10px;
		margin: 0 10px;
	}
	ul{
		margin-top: 50px;
		width: 100%;
	}
	ul li{
		width: 100%;
		display: flex;
		line-height: 50px;
		height: 50px;
		font-size: 14px;
		border-bottom: 1px solid #ddd;
		padding: 0 15px;
		box-sizing: border-box;
	}
	ul li img{
		width: 24px;
		height: 24px;
		margin-right: 10px;
		margin-top: 12px;
	}
	ul li .s_con{
		display: flex;
		flex-grow: 1;
	}
	ul li span{
		width: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
</style>