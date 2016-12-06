import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'
import moment from 'moment'

class FriendProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: window.location.href.split('=')[1],
            image: '',
            name: '',
            reviews: []
        }
    }
    componentDidMount(){
        fetch('/profile?id=' + this.state.id)
        .then(response => response.json())
        .then(response => this.setState({
            image: response.user.image,
            name: response.user.name,
            reviews: response.user.reviews
        }))
        // .then(response => {
        //     console.log(response)
        // })
    }
    render(){
        var userReviews = this.state.reviews.map((review, i) => {
            return       <div className="col-sm-12 home-middle-middle-review" key={i}>
                            <div className="col-sm-4">
                                <img src={review.image} alt="" />
                                <h5 className="text-center">{moment(review.created_at).fromNow()}</h5>
                            </div>
                            <div className="col-sm-8">
                                <h1 className="text-center">{review.venue_name}</h1>
                                <h3>Dish: {review.dish}</h3>
                                <h3>Rating: {review.rating}</h3>
                                <h3>website</h3>
                                <p>{review.body}</p>
                            </div>
                        </div>
        })
        return (
            <div>
              <div className="row">
                  <Header />
                <div className="col-sm-12 home-middle-section">
                    <LeftMenu />
                  <div className="col-sm-8 home-middle-middle">
                      <div className="col-sm-12 home-middle-middle-friends-profile">
                        <div className="col-sm-12">
                          <div className="col-sm-4">
                            <img className="img-rounded" src={this.state.image} alt="" />
                          </div>
                          <div className="col-sm-8 text-center">
                            <h1 className="friend-profile-name">{this.state.name}</h1>
                          </div>
                        </div>
                        {userReviews}
                      </div>
                  </div>
                  <FriendSideBar />
                </div>
              </div>
            </div>
        )
    }
}
export default FriendProfile
