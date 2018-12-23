import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NavBar from "./comp/NavBar";
import Table from './pages/Table';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/login" component={Login}/>
                    <NavBar>
                        <Route exact={true} path="/" component={Home}/>
                        <Route exact={true} path="/table" component={Table}/>
                    </NavBar>
                </Switch>
            </BrowserRouter>

        );
    }
}