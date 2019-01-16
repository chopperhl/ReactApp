import Home from './pages/Home'
import Login from './pages/Login'
import TablePage from './pages/TablePage'
import FormPage from './pages/FormPage'

export default [
    {
        show: true,
        name: '首页',
        key: '',
        component: Home,
        icon: 'home'
    },
    {
        show: true,
        name: '首页',
        key: 'index',
        component: Home,
        icon: 'home'
    },
    {
        show: true,
        name: '列表',
        key: 'table',
        component: TablePage,
        icon: 'table'
    },
    {
        show: true,
        name: '表单',
        key: 'form',
        component: FormPage,
        icon: 'form'
    },
    {
        show: true,
        name: '一级菜单',
        key: 'test1',
        icon: 'table',
        children: [{
            name: '二级菜单',
            key: 'test2',
            icon: 'table',
            component: TablePage
        }]
    },
    {
        show: false,
        name: '登录',
        key: 'login',
        component: Login
    }

]

