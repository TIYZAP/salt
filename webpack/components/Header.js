import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.logoutHandler = this.logoutHandler.bind(this)
    }
    logoutHandler(){
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('id')
        window.location.href="/landingpage"
    }
    render(){
        return(
            <div className="col-sm-12 head-nav-wrapper">
              <div className="col-sm-2 head-nav-left">
              </div>
              <div className="col-sm-8 head-nav-middle">
                <h1>Grain Of Salt</h1>
              </div>
              <div className="col-sm-2 head-nav-right">
                <button className="btn btn-danger" onClick={this.logoutHandler}>Logout<i className="fa fa-sign-out" aria-hidden="true"></i></button>
              </div>
            </div>
        )
    }
}
export default Header
