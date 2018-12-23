import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from "./comp/NavBar";
import router from './router'

export default class App extends React.Component {

    getRouters = () => {
        let showCompList = [];
        let compList = [];
        router.forEach(value => {
            if (Array.isArray(value.path)) {
                value.path.forEach(v => {
                    if (value.show) {
                        showCompList.push(<Route key={showCompList.length} exact={true} path={v}
                                                 component={value.component}/>);
                    } else {
                        compList.push(<Route key={compList.length} exact={true} path={v} component={value.component}/>);
                    }
                })
            } else {
                if (value.show) {
                    showCompList.push(<Route key={showCompList.length} exact={true} path={value.path}
                                             component={value.component}/>);
                } else {
                    compList.push(<Route key={compList.length} exact={true} path={value.path}
                                         component={value.component}/>);
                }
            }
        });
        return <Switch>
            {compList}
            <NavBar>{showCompList}</NavBar>
        </Switch>
    };

    render() {
        return (
            <BrowserRouter>
                {this.getRouters()}
            </BrowserRouter>

        );
    }
}