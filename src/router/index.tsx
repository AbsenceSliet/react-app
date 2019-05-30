import * as  React from  'react'
import {default as Loadable} from 'react-loadable'

import  {Route} from  'react-router-dom'
import loading from  '../components/Loading/index'
import routerInfo from './route';
import menuInfo from './menu';

const routes = [...routerInfo, ...menuInfo]
const loadableMid = (path:string):any =>
    Loadable({
        loader: () => import(`../containers/${path}/index`),
        loading,
        delay:300
    })

const getRoute = (info:any[])=>{
    console.log(info);
    const router = info.map(item=>(
        <Route key={item.path}
            exact={true}
            path={item.path}
            component={loadableMid(item.view)}
        />
    ))
    return router
}
export const Routes = getRoute(routes)
 

// const MenuList:any[] =[
//     {
//         component: () => import('../containers/About/index'),
//         path: '/about',
//         name:'about'
//     },
//     {
//         component: () => import('../containers/Home/index'),
//         path: '/home',
//         name:'home'
//     },

// ]

// const RouterMap = () => (
//     <Router>
//         <Switch>
//             {MenuList.map(item=>(
//                 <Route 
//                     key={item.path}
//                     exact={true}
//                     path={item.path}
//                     component={Loadable({
//                         loader: item.component,
//                         loading
//                     })}
//                 />
//             ))}
//         </Switch>
//     </Router>
// )
// export default RouterMap