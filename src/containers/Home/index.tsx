import React,{Component} from  'react'
import {Button } from  'antd'
import {Link} from  'react-router-dom'

class Home extends Component{
    public render(){
        return (
            <div>
                <Button>button</Button>
                <Link to={`/about`}>进入about   page</Link>
                <Link to={`/song`}>song   page</Link>
            </div>
        )
    }
}
export default Home