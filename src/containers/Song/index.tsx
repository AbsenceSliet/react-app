import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

class Song extends Component {
    public render() {
        return (
            <div>
                <Button>button</Button>
                <Link to={`/about`}>进入about   page</Link>
            </div>
        )
    }
}
export default Song