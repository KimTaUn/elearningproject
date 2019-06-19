import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Home from '../views/Home';
import Course from '../views/Course';

export default class HomeTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header></Header>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/home' component={Home}></Route>
                        <Route exact path='/courses' component={Course}></Route>
                    </Switch>
                    <Footer></Footer>
                </Fragment>
            </BrowserRouter>
        )
    }
}
