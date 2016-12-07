import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'


class Friends extends React.Component {
    constructor(props){
        super(props)
        this.removeFriend = this.removeFriend.bind(this)
        this.state = {
            friends: [],
            id: ''
        }
    }
    componentDidMount(){
        fetch('/api/friends/all?' + 'user_token=' + sessionStorage.getItem('token') + '&user_email=' + sessionStorage.getItem('email'))
        .then(response => response.json())
        .then(response => this.setState({
            friends: response.users
        }))
        // .then(response => this.updateFriends)
        // .then(response => {
        //     console.log(response)
        // })
    }

    removeFriend(id){
        fetch('/api/unfollow?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' + sessionStorage.getItem('token') + '&id=' + id , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => window.location.href="/friends")
    }
    render(){
        var myFriends = this.state.friends.map((friend, i) =>{
        return     <div className="col-sm-3 home-middle-middle-friends" key={i}>
                      <Link to={'/friendprofile?id=' + friend.id} >
                      <img className="img-thumbnail" src={friend.image} alt="" />
                      <h1 className="text-center">{friend.name}</h1>
                      </Link>
                      <div className="text-center">
                          <button className="btn btn-danger" onClick={() => this.removeFriend(friend.id)}>Unfollow</button>
                      </div>
                    </div>

        })
        return(
        <div>
          <div className="row">
              <Header />
            <div className="col-sm-12 home-middle-section">
                <LeftMenu />
              <div className="col-sm-8 home-middle-middle">
                {myFriends}
              </div>
              <FriendSideBar />
            </div>
          </div>
        </div>
        )
    }
}
export default Friends
