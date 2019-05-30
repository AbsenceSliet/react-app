import * as React from 'react'
import { Component } from 'react'
import {Layout} from 'antd';
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import './index.scss'
import BasicApp from './BasicApp/index';
import SongApp from './SongApp'


class App extends Component {
    public render() {
        return (
            <Layout>
                <Header />
                <Switch>
                    <Redirect from='/' exact to="/home" />
                    <Route path="/song" render={props => <SongApp {...props} />} />
                    <Route path="/" render={props => <BasicApp {...props} />} />
                </Switch>
                <Footer />
            </Layout>
        )
    }
}
export default App