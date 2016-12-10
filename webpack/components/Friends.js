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
        this.emailsHandler = this.emailsHandler.bind(this)
        this.enter = this.enter.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.state = {
            friends: [],
            id: '',
            email: ''
        }
    }
    componentDidMount(){
        fetch('/api/friends/all?' + 'user_token=' + sessionStorage.getItem('token') + '&user_email=' + sessionStorage.getItem('email'))
        .then(response => response.json())
        .then(response => this.setState({
            friends: response.users
        }))
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
    enter(e){
        if(e.key === 'Enter'){
            this.inviteFriends(e)
        }
    }
    emailsHandler(e){
        this.setState({
            email: e.target.value
        })
    }
    clickHandler(){
        this.inviteFriends()
    }
    inviteFriends(e){
        fetch('/api/invite/friends', {
            body: JSON.stringify({
                user_email: sessionStorage.getItem('email'),
                user_token: sessionStorage.getItem('token'),
                emails: this.state.email
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        setTimeout(() => document.getElementById('invite-friend-button').classList.add('friend-button-changer'),100)
    }
    render(){
        var myFriends = this.state.friends.map((friend, i) =>{
        return     <div className="col-sm-3 home-middle-middle-friends" key={i}>
                      <Link to={'/friendprofile/' + friend.id} >
                      <img className="img-rounded" src={friend.image} alt="" />
                      <h3 className="text-center">{friend.name}</h3>
                      </Link>
                      <div className="text-center">
                          <button className="btn btn-info" onClick={() => this.removeFriend(friend.id)}>Unfollow</button>
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
                  <div className="row">
                      <div className="col-sm-6 col-sm-offset-3">
                              <div className="input-group">
                                  <input type="text" id="invite-input" className="form-control" placeholder="Enter friends email to invite them"   onChange={this.emailsHandler}  onKeyPress={this.enter}/>
                                  <span className="input-group-btn">
                                      <button className="btn my-button btn-md" id="invite-friend-button" onClick={this.clickHandler}>Invite</button>
                                  </span>
                              </div>
                      </div>
                  </div>
                  <div className="row">
                      {myFriends}
                  </div>
              </div>
              <FriendSideBar />
            </div>
          </div>
        </div>
        )
    }
}
export default Friends
