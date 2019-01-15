import Home from './pages/Home'
import Login from './pages/Login'
import TablePage from './pages/TablePage'
import FormPage from './pages/FormPage'

export default [
    {
        show: true,
        key: '首页',
        path: '/home',
        component: Home,
        icon: 'home'
    },
    {
        show: true,
        key: '列表',
        path: '/table',
        component: TablePage,
        icon: 'table'
    },
    {
        show: true,
        key: '表单',
        path: '/form',
        component: FormPage,
        icon: 'form'
    },
    {
        show: true,
        key: '一级菜单',
        icon: 'table',
        children: [{
            key: '二级菜单',
            path: '/test',
            icon: 'table'
        }]
    },
    {
        show: false,
        key: '登录',
        path: '/login',
        component: Login
    }

]

