import {Menu, Icon, Layout, Breadcrumb, Avatar, Col, Row, Badge} from 'antd';

const SubMenu = Menu.SubMenu;

import React from "react";
import './NavBar.less'
import AntLogo from '../../img/ant-logo.svg'
import router from '../router'
import {withRouter} from 'react-router-dom'

const {Header, Sider, Content} = Layout;


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    onMenuClick = (path) => {
        this.props.history.push(path);
    };

    getMenuLabels = () => {
        const url = this.props.location.pathname;
        if (!url) return;
        let array = url.split("/");
        let srcList = router;
        let views = [];
        for (let i in array) {
            let key = array[i];
            if ('' === key) continue;
            if (!srcList) continue;
            for (let j in srcList) {
                let item = srcList[j];
                if (item.key === key) {
                    views.push(<Breadcrumb.Item key={key}>{item.name}</Breadcrumb.Item>);
                    srcList = item.children;
                    break;
                }
            }
        }
        return views;
    };


    getCurrentPath = () => {
        const url = this.props.location.pathname;
        if (!url || url === '/') return 'index';
        let array = url.split("/");
        return array[array.length - 1]
    };
    getOpenGroup = () => {
        const url = this.props.location.pathname;
        if (!url) return [];
        if (url === '/') return ['home'];
        return [url.split('/')[1]];
    };
    renderMenuList = () => {
        return router.map(value => {
            if (!value.show || value.key === '') return null;
            if (value.children) {
                const submenus = value.children.map(v => {
                    return (
                        <Menu.Item key={v.key} onClick={this.onMenuClick.bind(this, "/" + value.key + "/" + v.key)}>
                            <Icon type={v.icon || 'table'}/>
                            <span>{v.name}</span>
                        </Menu.Item>)
                });
                return (
                    <SubMenu key={value.key} title={
                        <span>
                            <Icon type={value.icon || 'table'}/>
                            <span>{value.name}</span>
                        </span>
                    }>
                        {submenus}
                    </SubMenu>)
            } else {
                return (
                    <Menu.Item key={value.key} onClick={this.onMenuClick.bind(this, "/" + value.key)}>
                        <Icon type={value.icon || 'table'}/>
                        <span>{value.name}</span>
                    </Menu.Item>)
            }

        });

    };


    render() {
        return (
            <Layout className="main-container">
                <Sider
                    className="nav-bar"
                    width={260}
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}>
                    <div className="logo"><span><img src={AntLogo}/>Ant Design Admin</span></div>
                    <Menu theme="dark" mode="inline" defaultOpenKeys={this.getOpenGroup()}
                          defaultSelectedKeys={[this.getCurrentPath()]}>
                        {this.renderMenuList()}
                    </Menu>
                </Sider>
                <Layout className="content">
                    <Header className="main-header">
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}/>
                        <div className="header-tools">
                            <span className="tools-item">Chopperhl</span>
                            <span className="tools-item">
                                <Avatar icon="user" size={"small"} style={{verticalAlign: 'middle'}}/>
                            </span>
                            <span className="tools-item">
                                <Badge count={5}>
                                    <Icon type="bell" style={{fontSize: 16}}/>
                                </Badge>
                            </span>
                            <span className="tools-item">
                                <Icon type="search" style={{fontSize: 19}}/>
                            </span>
                        </div>
                    </Header>
                    <div className="scroll-box">
                        <Breadcrumb className="bread-crumb">
                            {this.getMenuLabels()}
                        </Breadcrumb>
                        <Content className="comp-content">
                            {this.props.children}
                        </Content>
                    </div>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(NavBar);