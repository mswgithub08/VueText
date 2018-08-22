<template>
			<mt-tabbar v-model="selected">
			  <mt-tab-item id="推荐">
			    <router-link to="/recom">
			    	<span class="iconfont icon-dianfanbao"></span><br />
			    	推荐
			    </router-link>
			  </mt-tab-item>
			  <mt-tab-item id="发现">
			 <router-link to="/find">
			 	<span class="iconfont icon-faxian1"></span><br />
			 	发现
			 </router-link>
			  </mt-tab-item>
			  <mt-tab-item id="食话">
			   <router-link to="/chat">
			   	<span class="iconfont icon-xiaoxi1"></span><br />
			   	食话
			   </router-link>
			  </mt-tab-item>
			  <mt-tab-item id="我的">
			    <router-link to="/my">
			    	<span class="iconfont icon-wode"></span><br />
			    	我的
			    </router-link>
			  </mt-tab-item>
			</mt-tabbar>
</template>

<script>
	export default{
		data(){
			return{
				selected:'1'
			}
		}
	}
</script>

<style scoped>
	a{
		color: #666;	
	}
	 span{
		display: block;
		font-size: 24px;
	}
	.router-link-active{
		color: #ff4c39;
	}
	.mint-tabbar{
		position: fixed;
	}
</style>