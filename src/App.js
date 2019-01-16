import React from "react";
import {HashRouter, Switch, Route} from 'react-router-dom'
import NavBar from "./comp/NavBar";
import router from './router'

export default class App extends React.Component {

    getRouters = () => {
        let showCompList = [];
        let compList = [];
        router.forEach(value => {
            if (value.show) {
                if (value.children) {
                    value.children.forEach(v => {
                        showCompList.push(<Route key={showCompList.length} exact={true} path={"/" + value.key+"/" + v.key}
                                                 component={v.component}/>);
                    });
                } else {
                    showCompList.push(<Route key={showCompList.length} exact={true} path={"/" + value.key}
                                             component={value.component}/>);
                }
            } else {
                compList.push(<Route key={compList.length} exact={true} path={"/" + value.key}
                                     component={value.component}/>);
            }
        });
        return (
            <Switch>
                {compList}
                <NavBar>
                    {showCompList}
                </NavBar>
            </Switch>
        );
    };

    render() {
        return (
            <HashRouter>
                {this.getRouters()}
            </HashRouter>

        );
    }
}