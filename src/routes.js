import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import Index from './pages/index/index.vue';
import Table from './pages/nav1/Table.vue'
import Form from './pages/nav1/Form.vue'
import user from './pages/nav1/user.vue'

let routes = [
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },{
        path: '/',
        component: Home,
        name: '',
        iconCls: '',
        leaf: true,//只有一个节点
        children: [
            { path: '/index', component: Index, name: '首页' }
        ]
    },{
        path: '/',
        component: Home,
        name: '链路',
        iconCls: '',//图标样式class
        children: [
            { path: '/table', component: Table, name: '全链路' },
            { path: '/form', component: Form, name: '慢SQL' },
            { path: '/user', component: user, name: '异常' },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;