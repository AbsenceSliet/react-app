import React, { Component } from 'react';
import  './index.scss'
interface Icon{
    icon:string
}
class SvgIcon extends Component<Icon> {
    constructor(props:Icon){
        super(props)
    }
    public render(){
        const { icon } = this.props
        return(
            <div>
                <svg className="svg-icon" aria-hidden="true"> <use xlinkHref={`#icon-${icon}`} /> </svg>
            </div>
        )
    }
}
export default SvgIcon