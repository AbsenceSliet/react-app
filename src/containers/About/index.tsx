import React, { Component } from 'react'
import {Button, Rate} from 'antd'
import { Link } from 'react-router-dom'

class About extends Component {
    componentWillMount(){
        console.log('jjjj')
    }
    public render() {
        return (
            <div>
                <Button>button</Button>
                <Rate/>
                <Link to={`/home`}>进入home   page</Link>
            </div>
        )
    }
}

export default About