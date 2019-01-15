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
    onMenuClick = (value) => {
        let path = value.path;
        this.props.history.push(path);
    };

    renderMenuList = () => {
        return router.map(value => {
            if (!value.show) return null;
            if (value.children) {
                const submenus = value.children.map(v => {
                    return (
                        <Menu.Item key={v.key} onClick={this.onMenuClick.bind(this, v)}>
                            <Icon type={v.icon || 'table'}/>
                            <span>{v.key}</span>
                        </Menu.Item>)
                });
                return (
                    <SubMenu key={value.key} title={
                        <span>
                            <Icon type={value.icon || 'table'}/>
                            <span>{value.key}</span>
                        </span>
                    }>
                        {submenus}
                    </SubMenu>)
            } else {
                return (
                    <Menu.Item key={value.key} onClick={this.onMenuClick.bind(this, value)}>
                        <Icon type={value.icon || 'table'}/>
                        <span>{value.key}</span>
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["/home"]}>
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
                            <Breadcrumb.Item>111</Breadcrumb.Item>
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