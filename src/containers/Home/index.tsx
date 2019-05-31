import React,{Component} from  'react'
import {Button } from  'antd'
import {Link} from  'react-router-dom'
import SvgIcon from '../../components/SvgIcon/index';
class Home extends Component{
    public render(){
        return (
            <div>
                <Button>button</Button>
                <Link to={`/about`}>进入about   page</Link>
                <Link to={`/song`}>song   page</Link>
                <SvgIcon icon='music'/>
            </div>
        )
    }
}
export default Home