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
        // .then(response => {
        //     console.log(response)
        // })
    }
    render(){
        console.log(this.state.reviews)
        if(this.state.reviews){
            var friendsReviews = this.state.reviews.map((review, i) => {
               return             <div key={i}>
                                   <div className="row home-middle-middle-readreview-place">
                                       <div className="col-sm-6">
                                           <img height="300" className="img-rounded" src={review.image} alt="Place Picture" />
                                       </div>
                                       <div className="col-sm-6">
                                           <h4>{review.venue_name}</h4>
                                           <p>Address: {review.venue_address}</p>
                                           <p>Phone: {review.phone}</p>
                                           <p>Website: <a href={review.website}>Link to website</a></p>
                                       </div>
                                   </div>
                                    <div className="col-sm-12 home-middle-middle-readreview-inner" >
                                        <div className="row">
                                            <div className="col-sm-2 readreview-img">
                                              <p>{review.user.name}</p>
                                                <img className="img-circle" src={review.user.image} alt="Reviewers Picture" />
                                                <p>{moment(review.created_at).fromNow()}</p>
                                            </div>
                                            <div className="col-sm-10">
                                                <ReactStars count={review.rating} edit={false} color1={'#Eb8a3e'} size={18}/>
                                                <br />
                                                <p>Dish: {review.dish}</p>
                                                <p>Review: <br />{review.body}</p>
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
