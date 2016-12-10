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
        this.getProfile = this.getProfile.bind(this)
        this.state = {
            id: props.params.id,
            image: '',
            name: '',
            reviews: []
        }
    }
    componentDidMount(){
        this.getProfile()
    }
    componentWillReceiveProps(nextProps) {
        this.setState({id: nextProps.params.id})
        setTimeout(() => {this.getProfile()}, 0)
    }

    getProfile() {
        fetch('/api/profile?id=' + this.state.id)
        .then(response => response.json())
        .then(response => this.setState({
            image: response.user.image,
            name: response.user.name,
            reviews: response.user.reviews
        }))
    }

    render(){
        var userReviews = this.state.reviews.map((review, i) => {
            return       <div className="col-sm-12 home-middle-middle-friendsreview" key={i}>
                            <div className="col-sm-4">
                                <img  src={review.image} alt="" />
                                <h5 className="text-center">{moment(review.created_at).fromNow()}</h5>
                            </div>
                            <div className="col-sm-8">
                                <h1 className="text-center">{review.venue_name}</h1>
                                <h5>Dish: {review.dish}</h5>
                                <h5>Rating: {review.rating}</h5>
                                <h5>website: <a href={review.website}>Link to website</a></h5>
                                <h4>Review: <br />{review.body}</h4>
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
                            <div className="col-sm-12 text-center">
                                <img className="img-circle" src={this.state.image} alt="" />
                            </div>
                            <div className="col-sm-12 text-center">
                                <h3 className="friend-profile-name">{this.state.name}</h3>
                            </div>
                            <div className="row">
                                {userReviews}
                            </div>
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
