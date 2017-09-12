const routers = [{
    path: '/',
    component: (resolve) => require(['./views/login.vue'], resolve)
},{
    path: '/view',
    component:(resolve) => require(['./views/index.vue'], resolve),
    children: [{
        path:"basic/userManage",
        component:(resolve) => require(['./views/basic/userManage.vue'], resolve)
    }]
}];
export default routers;