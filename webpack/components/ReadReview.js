import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'
import moment from 'moment'

class ReadReview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            reviews: []
        }

    }
    componentDidMount(){
        fetch('/api/friends/reviews?place_id='+ window.location.href.split('?')[1].replace('place_id=','') + '&user_email=' + sessionStorage.getItem('email') + '&user_token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => this.setState({reviews: response.reviews}))
    }
    render(){
         var friendsReviews = this.state.reviews.map((review, i) => {
            return               <div className="col-sm-12 home-middle-middle-review" key={i}>
                                    <div className="col-sm-4">
                                      <h3 className="text-center">{review.user.name}</h3>
                                        <img src={review.user.image} alt="Reviewers Picture" />
                                        <h5 className="text-center">{moment(review.created_at).fromNow()}</h5>
                                    </div>
                                    <div className="col-sm-8">
                                        <h1 className="text-center">{review.venue_name}</h1>
                                        <h5>Dish: {review.dish}</h5>
                                        <h5>Rating: {review.rating}</h5>
                                        <h5>Address: {review.venue_address}</h5>
                                        <h5>Phone: {review.phone}</h5>
                                        <h5>Website: <a href={review.website}>Link to website</a></h5>
                                        <p>Review: <br />{review.body}</p>
                                    </div>
                                </div>
        })
        return(
            <div>
                <Menu />
              <div className="row">
                <Header />
                <div className="col-sm-12 home-middle-section">
                  <LeftMenu />
                  <div className="col-sm-8 home-middle-middle">
                    {friendsReviews}
                  </div>
                  <FriendSideBar />
                </div>
              </div>
            </div>
        )
    }
}

export default ReadReview
