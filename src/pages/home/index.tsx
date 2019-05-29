import * as React from 'react'
import {Link} from 'react-router-dom'
import './index.scss'


class App extends React.Component {
    public render(){
        return(
            <div>
                <h1 className="root">首页</h1>
                <Link to={`/about`}>关于我的</Link>
            </div>
        )
    }
}
export default App