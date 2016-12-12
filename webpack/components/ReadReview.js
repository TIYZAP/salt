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
            reviews: []
        }

    }
    componentDidMount(){
        fetch('/api/friends/reviews?place_id='+ window.location.href.split('?')[1].replace('place_id=','') + '&user_email=' + sessionStorage.getItem('email') + '&user_token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => this.setState({reviews: response.reviews}))
    }
    render(){
        console.log(this.state.reviews)
        if(this.state.reviews){
            var friendsReviews = this.state.reviews.map((review, i) => {
               return               <div className="col-sm-12 home-middle-middle-review" key={i}>
                                       <div className="col-sm-4">
                                         <h3 className="text-center">{review.user.name}</h3>
                                           <img className="img-rounded" src={review.user.image} alt="Reviewers Picture" />
                                           <p className="text-center">{moment(review.created_at).fromNow()}</p>
                                       </div>
                                       <div className="col-sm-8">
                                           <h1 className="text-center">{review.venue_name}</h1>
                                           <p>Dish: {review.dish}</p>
                                           Rating: <ReactStars count={review.rating} edit={false} color1={'#Eb8a3e'} />
                                           <p>Address: {review.venue_address}</p>
                                           <p>Phone: {review.phone}</p>
                                           <p>Website: <a href={review.website}>Link to website</a></p>
                                           <h4>Review: <br />{review.body}</h4>
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
