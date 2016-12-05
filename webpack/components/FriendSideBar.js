import React from 'react'
import { Link } from 'react-router'


class FriendSideBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            friends: []
        }
    }
    componentWillMount(){
        fetch('/friends/all?' + 'user_token=' + sessionStorage.getItem('token') + '&user_email=' + sessionStorage.getItem('email'))
        .then(response => response.json())
        .then(response => this.setState({
            friends: response.users
        }))
    }
    render(){
        var friendsList = this.state.friends.map((friend, i) =>{
        return    <Link to={'/friendprofile?id=' + friend.id} key={i}>
                    <div className="col-sm-12 home-each-friend">
                      <div className="col-sm-4">
                        <img className="img-rounded" src={friend.image} alt="" />
                      </div>
                      <div className="col-sm-8">
                        {friend.name}
                      </div>
                    </div>
                </Link>
        })
        return(
            <div className="col-sm-2 home-middle-right">
                <h1>Friends</h1>
                {friendsList}
            </div>
        )
    }
}

export default FriendSideBar
