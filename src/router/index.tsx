import * as React from  'react'
import * as Loadable from 'react-loadable'
import loading from  './loading'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const RouterList: any[] = [
    {
        component: () => import('../pages/layout/index'),
        path:'/'
    },
    {
        component: () => import('../pages/home/index'),
        path: '/index'
    },
    {
        component: () => import('../pages/about/index'),
        path: '/about'
    }
]
const RouterMap  = () => (
    <Router>
        <Switch>
        {RouterList.map(item=>(
            <Route 
                key={item.path}
                path={item.path}
                component={Loadable({
                    loader: item.component,
                    loading
                })}
                exact={true}
            />
        ))}
        </Switch>
    </Router>
)
export default RouterMap