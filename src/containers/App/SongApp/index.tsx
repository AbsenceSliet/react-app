import React, { Component } from 'react'
import {Routes} from '../../../router/index'
import { Switch } from 'react-router-dom'


export default class SongApp extends Component {
    render() {
        return <Switch>{Routes}</Switch>
    }
}
