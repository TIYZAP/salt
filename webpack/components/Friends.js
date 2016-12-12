import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    background            : '#E6EFF2',
    width                 : '800px',
    height                : '800px',
    // overflow              : 'scroll',
    transform             : 'translate(-50%, -50%)'
  }
}

class Friends extends React.Component {
    constructor(props){
        super(props)
        this.removeFriend = this.removeFriend.bind(this)
        this.emailsHandler = this.emailsHandler.bind(this)
        this.enter = this.enter.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.inputHandler = this.inputHandler.bind(this)
        this.findFriend = this.findFriend.bind(this)
        this.enterHandler = this.enterHandler.bind(this)
        this.state = {
            friends: [],
            id: '',
            email: '',
            modalIsOpen: false,
            input: ''
          }
    }
    componentWillMount() {
    Modal.setAppElement('#app');
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
        if (this.state.email !== '') {
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
            .then(response => {
                console.log(response)
                // let statusCode = response.status
                // return {json: response.json(), status: statusCode}
            })
            // .then(response => alert(response.status))
        }
        else {

        }
    }
    openModal() {
      this.setState({modalIsOpen: true});
    }
    closeModal() {
      this.setState({modalIsOpen: false});
    }
    enterHandler(e){
      if(e.key === 'Enter'){
        this.findFriend(e)
      }
    }
    inputHandler(e){
      this.setState({
        input: e.target.value
      })
    }
    findFriend(e){
      fetch('/api/search/friends', {
        body: JSON.stringify({
          user_email: sessionStorage.getItem('email'),
          user_token: sessionStorage.getItem('token'),
          input: this.state.input
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())

    }
    render(){
        var myFriends = this.state.friends.map((friend, i) =>{
        return     <div className="col-sm-3 home-middle-middle-friends" key={i}>
                      <Link to={'/friendprofile/' + friend.id} >
                      <img className="img-rounded" src={friend.image} alt="" />
                      <h4 className="text-center">{friend.name}</h4>
                      </Link>
                      <div className="text-center">
                          <button className="btn btn-info" onClick={() => this.removeFriend(friend.id)}>Unfollow</button>
                      </div>
                    </div>
        })
        return(
        <div>
            <Header />
            <Menu />
          <div className="row">
            <div className="home-middle-section">
                <LeftMenu  {...this.props}/>
              <div className="col-sm-8 home-middle-middle">
                  <div className="row">
                      <div className="col-sm-12 text-center middle-nav">
                          <button className="btn btn-primary" onClick={this.openModal}><i className="fa fa-search" aria-hidden="true"></i> Search for Friends</button>
                          <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal">
                            <div className="text-right">
                              <button onClick={this.closeModal}><i className="fa fa-times" aria-hidden="true"></i>
                              </button>
                            </div>
                            <div className="col-sm-6 col-sm-offset-3">
                                    <div className="input-group">
                                        <input type="text" id="invite-input" className="form-control" placeholder="Search for friends"   onChange={this.inputHandler}  onKeyPress={this.enterHandler}/>
                                        <span className="input-group-btn">
                                            <button className="btn my-button btn-md" id="invite-friend-button">Search</button>
                                        </span>
                                    </div>
                            </div>
                          </Modal>
                      </div>
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
