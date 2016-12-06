import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'
import urlParse from 'url-parse'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        allReviews:[]
        }
    }
    componentDidMount(){
        if(window.location.href.includes('email')){
            var url = new urlParse(window.location.href, true)
            sessionStorage.setItem('email', url.query.email)
            sessionStorage.setItem('token', url.query.token)
            sessionStorage.setItem('id', url.query.id)
        }
        fetch('/api/timeline?' + 'user_token=' + sessionStorage.getItem('token') + '&user_email=' + sessionStorage.getItem('email'))
        .then(response => response.json())
        .then(response => this.setState({allReviews: response.reviews}))
        // .then(response => {
        //     console.log(response.reviews)
        // })
    }
    render(){
        if(this.state.allReviews.length){
            var friendsReviews = this.state.allReviews.map((review, i) => {
                return  (
                    <div className="col-sm-12 home-middle-middle-review" key={i}>
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
                )}
            )
        }
        else{
            var friendsReviews =  <div className="col-sm-8 col-sm-offset-2 reviews">
                                    <div className="col-sm-12">
                                        <h1>You either have no friends or your friends have not left any reviews yet!</h1>
                                    </div>
                                </div>
        }
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
export default Home
