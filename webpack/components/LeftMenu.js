import React from 'react'
import { Link } from 'react-router'
import urlParse from 'url-parse'

class LeftMenu extends React.Component {
    constructor(props){
        super(props)
        this.followAllFriends = this.followAllFriends.bind(this)
        this.state = {
            name: '',
            image: '',
        }
    }
    componentWillMount(){
        var url = new urlParse(window.location.href, true)
        fetch('/api/profile?id=' + (sessionStorage.getItem('id')?sessionStorage.getItem('id'):url.query.id))
        .then(response => response.json())
        .then(response => this.setState({
            name: response.user.name,
            image: response.user.image
        }))
    }
    followAllFriends(){
        fetch('/api/facebook/follow?user_email=' + sessionStorage.getItem('email') + '&user_token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => window.location.href="/friends")
    }
    render(){
        return(
            <div className="col-sm-2 home-middle-left text-center">
              <div>
                  <h1 className="text-center">{this.state.name}</h1>
                  <img className="img-responsive" src={this.state.image} alt="User Profile Picture" />
              </div>
              <ul>
                 <Link to="/home" style={{textDecoration:'none'}}><li><i className="fa fa-home fa-2x" aria-hidden="true"></i><br />Home</li></Link>
                 <Link to="/yourprofile" style={{textDecoration:'none'}}><li><i className="fa fa-user fa-2x" aria-hidden="true"></i><br />Your Profile</li></Link>
                 <Link to="/friends" style={{textDecoration:'none'}}><li><i className="fa fa-users fa-2x" aria-hidden="true"></i><br />Friends</li></Link>
                 <Link to="/search" style={{textDecoration:'none'}}><li><i className="fa fa-plus fa-2x" aria-hidden="true"></i><br />Review</li></Link>
                 <li onClick={this.followAllFriends}><i className="fa fa-facebook-official fa-lg" aria-hidden="true"> Follow fb friends</i></li>
              </ul>
            </div>
        )
    }
}
export default LeftMenu
