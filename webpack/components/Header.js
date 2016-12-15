import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="row">
                <div className="col-sm-12 head-nav-wrapper">
                    <div className="row">
                  <div className="col-sm-2 head-nav-left hidden-xs">
                  </div>
                  <div className="col-sm-8 head-nav-middle">
                    <h1>Grain Of Salt</h1>
                  </div>
                  <div className="col-sm-2 head-nav-right hidden-xs">
                  </div>
                  </div>
                </div>
            </div>
        )
    }
}
export default Header
