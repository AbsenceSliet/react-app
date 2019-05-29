import * as  React from  'react'
import {default as Loadable} from 'react-loadable'

import  {BrowserRouter as Router, Route, Switch} from  'react-router-dom'
import loading from  '../components/loading/index'

const RouterList:any[] =[
    {
        component: ()=> import('../pages/layouts/index'),
        path:'/'
    }
]

const RouterMap = () => (
    <Router>
        <Switch>
            {RouterList.map(item=>(
                <Route 
                    key={item.path}
                    exact={true}
                    path={item.path}
                    component={Loadable({
                        loader: item.component,
                        loading
                    })}
                />
            ))}
        </Switch>
    </Router>
)
export default RouterMap