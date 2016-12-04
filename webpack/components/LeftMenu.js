import React from 'react'
import { Link } from 'react-router'

class LeftMenu extends React.Component {
    constructor(props){
        super(props)
        this.followAllFriends = this.followAllFriends.bind(this)
    }
    followAllFriends(){
        fetch('/facebook/follow?user_email=' + sessionStorage.getItem('email') + '&user_token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
    }
    render(){
        return(
            <div className="col-sm-2 home-middle-left text-center">
              <div>
                  <img className="img-circle" src="http://unsplash.it/600/600?random" alt="User Profile Picture" />
              </div>
              <ul>
                 <Link to="/"><li><i className="fa fa-home" aria-hidden="true">Home</i></li></Link>
                 <Link to="/friends"><li><i className="fa fa-users" aria-hidden="true">Friends</i></li></Link>
                 <Link to="/friendprofile"><li><i className="fa fa-users" aria-hidden="true">FriendsProfile</i></li></Link>
                 <Link to="/search"><li><i className="fa fa-search" aria-hidden="true">Search</i></li></Link>
                 <Link to="/landingpage"><li>Landing</li></Link>
                 <Link to="/signin"><li>SignIn</li></Link>
                 <Link to="/signup"><li>SignUp</li></Link>
                 <button className="btn btn-default" onClick={this.followAllFriends}>Click me to follow all friends</button>
              </ul>
            </div>
        )
    }
}
export default LeftMenu
