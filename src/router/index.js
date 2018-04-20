import Vue from 'vue';
import Router from 'vue-router';
import index from '@/page/index.vue';
import Toast from 'vue-easy-toast'
import bridge1 from '@/page/bridge1.vue';
import bridge2 from '@/page/bridge2.vue';
import bridge3 from '@/page/bridge3.vue';
import bridge4 from '@/page/bridge4.vue';
import bridge5 from '@/page/bridge5.vue';
import bridge6 from '@/page/bridge6.vue';
import bridge7 from '@/page/bridge7.vue';
import bridgeInfoEdit from '@/page/bridgeInfoEdit.vue';
Vue.use(Router)
Vue.use(Toast)

export default new Router({
  routes: [
    {path: '/bridge1',name: 'bridge1',component: bridge1},
    {path: '/bridge2',name: 'bridge2',component: bridge2},
    {path: '/bridge3',name: 'bridge3',component: bridge3},
    {path: '/bridge4',name: 'bridge4',component: bridge4},
    {path: '/bridge5',name: 'bridge5',component: bridge5},
    {path: '/bridge6',name: 'bridge6',component: bridge6},
    {path: '/bridge7',name: 'bridge7',component: bridge7},
    {path: '/bridgeInfoEdit',name: 'bridgeInfoEdit',component: bridgeInfoEdit},
    {path: '*',redirect : {name:"bridge1"}}
  ]
})
