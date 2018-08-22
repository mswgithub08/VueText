<template>
  <main>
  	<router-view></router-view>
  	<v-footer></v-footer>
  </main>
</template>

<script>
    import vfooter from './component/index/footer.vue'

    export default{
        components:{
          'v-footer':vfooter
        }
    }
</script>

<style>
	a{
		text-decoration: none;
	}
	#chat .mint-swipe-items-wrap{
		padding-bottom: 60%;
	}
	#recom .mint-swipe-items-wrap{
		padding-bottom: 150%;
	}
	.mint-swipe-indicator.is-active{
		background: red;
	}
</style>
