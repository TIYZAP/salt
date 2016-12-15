import React from 'react'
import { Link } from 'react-router'
import urlParse from 'url-parse'

class LeftMenu extends React.Component {
    constructor(props){
        super(props)
        this.logoutHandler = this.logoutHandler.bind(this)
        this.state = {
            name: '',
            image: '',
            reviews: []
        }
    }
    logoutHandler(){
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('id')
        window.location.href="/"
    }
    componentWillMount(){
        var url = new urlParse(window.location.href, true)
        fetch('/api/profile?id=' + (sessionStorage.getItem('id')?sessionStorage.getItem('id'):url.query.id))
        .then(response => response.json())
        .then(response => this.setState({
            name: response.user.name,
            image: response.user.image,
            reviews: response.user.reviews
        }))
    }
    render(){
        return(
            <div className="col-sm-2 home-middle-left text-center hidden-xs">
              <div>
                  <img src={this.state.image} alt="User Profile Picture" />
                  <h4 className="text-center">{this.state.name}</h4>
                  <p>Points: <span className="badge">{this.state.reviews.length}0</span></p>
              </div>
              <ul>
                 <Link to="/home" style={{textDecoration:'none'}}><li className={this.props.route.path === '/home'?"nav active":"nav"} onClick={this.activeHandler}><i className="fa fa-home fa-2x" aria-hidden="true"></i><br />Home</li></Link>
                 <Link to="/search" style={{textDecoration:'none'}}><li className={this.props.route.path === '/search'?"nav active":"nav"} onClick={this.activeHandler}><i className="fa fa-file-text-o fa-2x" aria-hidden="true"></i><br />Post Review</li></Link>
                 <Link to="/yourprofile" style={{textDecoration:'none'}}><li className={this.props.route.path === '/yourprofile'?"nav active":"nav"} onClick={this.activeHandler}><i className="fa fa-star fa-2x" aria-hidden="true"></i><br />My Profile</li></Link>
                 <Link to="/friends" style={{textDecoration:'none'}}><li className={this.props.route.path === '/friends'?"nav active":"nav"} onClick={this.activeHandler}><i className="fa fa-users fa-2x" aria-hidden="true"></i><br />Friends</li></Link>
                    <li className="nav" onClick={this.logoutHandler}><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i><br />Logout</li>
              </ul>
            </div>
        )
    }
}
export default LeftMenu
