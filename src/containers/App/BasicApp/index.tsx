import { Layout } from 'antd';
import { Routes } from '../../../router/index'
import * as React from 'react'
import { Component } from 'react'
import {Switch} from  'react-router-dom'
import SlideBar from '../../../components/SlideBar/index';
import '../index.scss'
const { Content } = Layout

console.log(Routes);

class BasicApp extends Component {
    public render() {
        return (
                <Layout>
                    <SlideBar />
                    <Layout>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <Switch>{Routes}</Switch>
                        </Content>
                    </Layout>
                </Layout>
        )
    }
    private onBreakpoint = (e: any): void => {
        // console.log(e)
    }
}
export default BasicApp