import Home from './pages/Home'
import Login from './pages/Login'
import TablePage from './pages/TablePage'
import FormPage from './pages/FormPage'

export default [
    {
        show: true,
        key: '首页',
        path: ['/', '/home'],
        pathName: ["首页"],
        component: Home,
        icon: 'home'
    },
    {
        show: true,
        key: '列表',
        path: '/table',
        pathName: ["列表"],
        component: TablePage,
        icon: 'table'
    },
    {
        show: true,
        key: '表单',
        path: '/form',
        pathName: ["表单"],
        component: FormPage,
        icon: 'form'
    }
    ,
    {
        show: false,
        key: '登录',
        path: '/login',
        component: Login
    }

]

