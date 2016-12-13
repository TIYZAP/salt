import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'
import moment from 'moment'
import ReactStars from 'react-stars'


class ReadReview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            reviews: [],
            image: '',
            name: '',
            website: '',
            address: '',
            phone: ''
        }

    }
    componentDidMount(){
        fetch('/api/friends/reviews?place_id='+ window.location.href.split('?')[1].replace('place_id=','') + '&user_email=' + sessionStorage.getItem('email') + '&user_token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => this.setState({
            reviews: response.reviews,
            image: (response.reviews?response.reviews[0].image:''),
            name: (response.reviews?response.reviews[0].venue_name:''),
            address: (response.reviews?response.reviews[0].venue_address:''),
            website: (response.reviews?response.reviews[0].website:''),
            phone: (response.reviews?response.reviews[0].phone:'')
        }))
    }
    render(){
        if(this.state.reviews){
            var reviewPlace =     <div className="row home-middle-middle-readreview-place">
                                      <div className="col-sm-4">
                                          <img height="300" className="img-responsive" src={this.state.image} alt="Place Picture" />
                                      </div>
                                      <div className="col-sm-8">
                                          <h4>{this.state.name}</h4>
                                          <p>Address: {this.state.address}</p>
                                          <p>Phone: {this.state.phone}</p>
                                          <p>Website: <a href={this.state.website}>Link to website</a></p>
                                      </div>
                                  </div>

            var friendsReviews = this.state.reviews.map((review, i) => {
               return             <div key={i}>
                                    <div className="col-sm-12 home-middle-middle-readreview-inner" >
                                        <div className="row">
                                            <div className="col-sm-2 readreview-img">
                                              <p>{review.user.name}</p>
                                                <img className="img-responsive" src={review.user.image} alt="Reviewers Picture" />
                                                <p>{moment(review.created_at).fromNow()}</p>
                                            </div>
                                            <div className="col-sm-10">
                                                <ReactStars count={review.rating} edit={false} color1={'#Eb8a3e'} size={18}/>
                                                <br />
                                                <p>Dish: {review.dish}</p>
                                                <h5>Review: <br />{review.body}</h5>
                                            </div>
                                        </div>
                                   </div>
                                  </div>
           })}
           else{
               var friendsReviews = <div className="home-middle-middle-review">
                        <h1 className="text-center"><i className="fa fa-frown-o fa-4x" aria-hidden="true"></i></h1>
                        <h3 className="text-center">There are no reviews for this place yet, but you can be the first one!!</h3>
                    </div>
           }

        return(
            <div>
                <Menu />
                <Header />
              <div className="row">
                <div className="home-middle-section">
                  <LeftMenu  {...this.props}/>
                  <div className="col-sm-8 home-middle-middle">
                     {reviewPlace}
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
