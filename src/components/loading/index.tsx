import {Spin} from  'antd'
import * as React from  'react'
import './index.scss'

const Loading =() =>(
    <div className="loading">
        <Spin size="large" />
    </div>
)
export default Loading