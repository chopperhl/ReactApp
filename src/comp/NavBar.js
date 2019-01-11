import {Menu, Icon, Layout, Breadcrumb, Avatar, Col, Row, Badge} from 'antd';


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
        let path = Array.isArray(value.path) ? value.path[0] : value.path;
        this.props.history.push(path);
    };

    renderMenuList = () => {
        return router.map(value => {
            if (!value.show) return null;
            return (
                <Menu.Item key={value.key} onClick={this.onMenuClick.bind(this, value)}>
                    <Icon type={value.icon || 'table'}/>
                    <span>{value.key}</span>
                </Menu.Item>

            )
        });

    };


    getSelectedKey = () => {
        const url = this.props.location.pathname;
        for (let i = 0; i < router.length; i++) {
            if (Array.isArray(router[i].path)) {
                for (let j = 0; j < router[i].path.length; j++) {
                    if (router[i].path[j] === url) return router[i].key;
                }
            }
            if (router[i].path === url) return router[i].key;
        }
        return "Home";

    };
    getSelectedPath = () => {
        const url = this.props.location.pathname;
        for (let i = 0; i < router.length; i++) {
            if (Array.isArray(router[i].path)) {
                for (let j = 0; j < router[i].path.length; j++) {
                    if (router[i].path[j] === url) return router[i].pathName;
                }
            }
            if (router[i].path === url) return router[i].pathName;
        }

        return router[0].pathName;
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.getSelectedKey()]}>
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
                            {this.getSelectedPath().map((value, i) => {
                                return <Breadcrumb.Item key={i}>{value}</Breadcrumb.Item>
                            })}
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