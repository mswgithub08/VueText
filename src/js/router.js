import VueRouter from 'vue-router';

import recom from '../component/nav/recom.vue';
import find from '../component/nav/find.vue';
import chat from '../component/nav/chat.vue';
import my from '../component/nav/my.vue';
import search1 from '../component/nav/search1.vue';
import search2 from '../component/nav/search2.vue';
import msg from '../component/nav/msg.vue';
import login from '../component/nav/login.vue';
import detail from '../component/nav/detail.vue'

export default new VueRouter({
	routes:[
		{
			path:'/recom',
			component:recom
		},
		{path:'/find',component:find},
		{path:'/chat',component:chat},
		{path:'/my',component:my},
		{path:'*',redirect:'/recom'},
		{path:'/search1',component:search1},
		{path:'/search2',component:search2},
		{path:'/msg',component:msg},
		{path:'/login',component:login},
		{path:'/detail',component:detail},
	]
})