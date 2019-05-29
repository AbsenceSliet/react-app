import * as React from 'react'
import {Link} from 'react-router-dom'
const About = () => (
    <div>
        <p>关于我的页面</p>
        <Link to={`/`}>返回</Link>
    </div>
)
export default About