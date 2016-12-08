import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'
import moment from 'moment'
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
    overflow              : 'scroll',
    transform             : 'translate(-50%, -50%)'
  }
}

class YourProfile extends React.Component{
    constructor(props) {
        super(props)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this)
        this.sendId = this.sendId.bind(this)
        // this.friendsList = this.friendsList.bind(this)
        this.state = {
            myReviews: [],
            modalIsOpen: false,
            modalCurrentReview: undefined,
            friends: [],
            sentFriends: {}
        }
    }
    componentWillMount(){
        Modal.setAppElement('#app');
        fetch('/api/profile?id=' + sessionStorage.getItem('id'))
        .then(response => response.json())
        .then(response => this.setState({
            myReviews: response.user.reviews
        }))
    }
    componentDidMount(){
      fetch('/api/friends/all?' + 'user_token=' + sessionStorage.getItem('token') + '&user_email=' + sessionStorage.getItem('email'))
      .then(response => response.json())
      // .then(this.friendsList)
      .then(response => this.setState({
        friends: response.users
      }))
      // .then(response => {
      //   console.log(response)
      // })
    }
    sendId(friend){
      let sentFriends = this.state.sentFriends
      if (!sentFriends[this.state.modalCurrentReview.id]) {
        sentFriends[this.state.modalCurrentReview.id] = []
      }
      sentFriends[this.state.modalCurrentReview.id].push(friend.id)

      fetch('/api/send/rec', {
              body: JSON.stringify({
                  user_email: sessionStorage.getItem('email'),
                  user_token: sessionStorage.getItem('token'),
                  review_id: this.state.modalCurrentReview.id,
                  friend_id: friend.id
              }),
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              }})
      .then(response => response.json())
  }
    openModal(review) {
      this.setState({modalIsOpen: true, modalCurrentReview: review});
    }
    closeModal() {
      this.setState({modalIsOpen: false});
    }
    afterOpenModal() {
    }
    render(){
      console.log(this.state.myReviews)
      var recFriends = this.state.friends.map((friend, i) => {
        return          <div style={{background:'white', padding: '10px', margin:'5px'}} className="col-sm-3" key={i}>
                              <img className="img-circle" src={friend.image} alt="" />
                              <h4 className="text-center">{friend.name}</h4>
                              <div className="text-center">
                                  <button className="btn btn-danger" onClick={() => this.sendId(friend)}>Recommend</button>
                              </div>
                        </div>
      })
        var displayMyReviews = this.state.myReviews.map((review, i) => {
            return <div className="col-sm-12 home-middle-middle-review" key={i}>
                        <div className="row">
                            <div className="col-sm-4">
                                <img  src={review.image} alt="" />
                                <h5 className="text-center">{moment(review.created_at).fromNow()}</h5>
                            </div>
                            <div className="col-sm-8">
                                <h1 className="text-center">{review.venue_name}</h1>
                                <h3>Dish: {review.dish}</h3>
                                <h3>Rating: {review.rating}</h3>
                                <h3>website</h3>
                                <p>{review.body}</p>
                                <button className="btn btn-default" onClick={() => this.openModal(review)}>Recommend</button>
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
                                  <div className="row">
                                    {recFriends}
                        </div>
                                </Modal>
                            </div>
                        </div>

                    </div>
        })
        return(
            <div>
                <Menu />
                <Header />
                <div className="row home-middle-section">
                  <LeftMenu />
                  <div className="col-sm-8 home-middle-middle">
                     {displayMyReviews}
                  </div>
                  <FriendSideBar />
              </div>
            </div>
        )
    }
}
export default YourProfile
