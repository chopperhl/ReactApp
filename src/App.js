import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom'
import {Route} from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import NavBar from "./comp/NavBar";
import Table from './pages/Table';

export default class App extends React.Component {
    render() {

        const routerIndex = ({match}) => {
            console.log(match);
            return (
                <div>
                    <NavBar/>
                    <Route exact={true} path="/" component={Home}/>
                    <Route exact={true} path="/table" component={Table}/>
                </div>
            );

        };
        return (
            <BrowserRouter>
                <Route path="*" component={routerIndex}/>
            </BrowserRouter>

        );
    }
}