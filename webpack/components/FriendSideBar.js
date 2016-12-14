import React from 'react'
import { Link } from 'react-router'
import urlParse from 'url-parse'


class FriendSideBar extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         friends: []
    //     }
    // }
    // componentWillMount(){
    //     var url = new urlParse(window.location.href, true)
    //     fetch('/api/friends/all?' + 'user_token=' + (sessionStorage.getItem('token')?sessionStorage.getItem('token'):url.query.token) + '&user_email=' + (sessionStorage.getItem('email')?sessionStorage.getItem('email'):url.query.email) )
    //     .then(response => response.json())
    //     .then(response => this.setState({
    //         friends: response.users
    //     }))
    // }

    render(){
        if(this.props.friends){
            var friendsList = this.props.friends.map((friend, i) =>{
            return    <Link to={'/friendprofile/' + friend.id} key={i}>
                        <div className="col-sm-12 home-each-friend">
                          <div className="col-sm-5">
                            <img  src={friend.image} alt="" />
                          </div>
                          <div className="col-sm-7">
                              <h5>{friend.name}</h5>
                            Points:<span className="badge">{friend.reviews.length}0</span>
                          </div>
                        </div>
                    </Link>
        })}
        else {
            var friendsList = <Link to="/friends"><button className="btn btn-primary">Add Friends</button></Link>
        }
        return(
            <div className="col-sm-2 home-middle-right">
                <h1>Friends</h1>
                {friendsList}
            </div>
        )
    }
}

export default FriendSideBar
