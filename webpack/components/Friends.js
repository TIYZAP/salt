import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'


class Friends extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friends: []
        }
    }
    componentDidMount(){

        fetch('/friends/all?' + 'user_token=' + sessionStorage.getItem('token') + '&user_email=' + sessionStorage.getItem('email'))
        .then(response => response.json())
        .then(response => this.setState({
            friends: response.users
        }))
        // .then(response => {
        //     console.log(response)
        // })
    }
    render(){
        var myFriends = this.state.friends.map((friend, i) =>{
        return     <Link to={'/friendprofile?id=' + friend.id} key={i}>
                    <div className="col-sm-3 home-middle-middle-friends">
                      <img className="img-thumbnail" src={friend.image} alt="" />
                      <h1 className="text-center">{friend.name}</h1>
                    </div>
                    </Link>
        })
        return(
        <div className="container-fluid">
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
