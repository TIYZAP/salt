import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import Menu from './Menu'
import urlParse from 'url-parse'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.logoutHandler = this.logoutHandler.bind(this)
        this.followAllFriends = this.followAllFriends.bind(this)
        this.state = {
        allReviews:[]
        }
    }
    componentDidMount(){
        if(window.location.href.includes('email')){
            var url = new urlParse(window.location.href, true)
            sessionStorage.setItem('email', url.query.email)
            sessionStorage.setItem('token', url.query.token)
        }
        fetch('/timeline?' + 'user_token=' + sessionStorage.getItem('token') + '&user_email=' + sessionStorage.getItem('email'))
        .then(response => response.json())
        .then(response => this.setState({allReviews: response.reviews}))
        // .then(response => {
        //     console.log(response.reviews)
        // })
    }
    logoutHandler(){
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('token')
        window.location.href="/landingpage"
    }
    followAllFriends(){
        fetch('/facebook/follow?user_email=' + sessionStorage.getItem('email') + '&user_token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
    }
    render(){
        if(this.state.allReviews.length){
            var friendsReviews = this.state.allReviews.map((review, i) => {
                return  (
                    <div className="col-sm-8 col-sm-offset-2 reviews" key={i}>
                        <div className="col-sm-4">
                            <img height="200" className="img-rounded" src={review.user.image} alt="" />
                            <h4>{review.user.name}</h4>
                            <h5>{moment(review.created_at).fromNow()}</h5>
                        </div>
                        <div className="col-sm-8">
                            <h1>{review.venue_name}</h1>
                            <p>Dish: {review.dish}</p>
                            <p>Rating: {review.rating}</p>
                            <p>Address: {review.venue_address}</p>
                            <p>{review.body}</p>
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
                <div className="nav-bar-left">
                    <div>
                        <img className="img-rounded" src="http://unsplash.it/600/600?random" alt="" />
                    </div>
                    <ul>
                        <Link to="/" style={{textDecoration: 'none'}}><li><i className="fa fa-home" aria-hidden="true"> Home</i>
                        </li></Link>
                        <Link to="/friends" style={{textDecoration: 'none'}}><li><i className="fa fa-users" aria-hidden="true"> Friends</i>
                        </li></Link>
                        <Link to="/review" style={{textDecoration: 'none'}}><li>Review</li></Link>
                        <Link to="/search" style={{textDecoration: 'none'}}><li><i className="fa fa-search" aria-hidden="true"> Search</i>
                        </li></Link>
                        <Link to="/friendprofile" style={{textDecoration: 'none'}}><li>FriendProfile</li></Link>
                        <Link to="/landingpage" style={{textDecoration: 'none'}}><li>LandingPage</li></Link>
                        <Link to="/signin" style={{textDecoration: 'none'}}><li>Signin</li></Link>
                        <Link to="/signup" style={{textDecoration: 'none'}}><li>Signup
                        </li></Link>
                        <li><button className="btn btn-default" onClick={this.logoutHandler}><i className="fa fa-sign-out" aria-hidden="true"> Logout</i></button></li>
                    </ul>
                </div>
            <div className="container-fluid main-body-home">
                <div className="row">
                    <div className="col-sm-12 col-sm-offset-3 main-body-right">
                        <div className="col-sm-9 text-center logo">
                            <button className="btn btn-default" onClick={this.followAllFriends}>Click me to follow all friends</button>
                            <h1>Grain of Salt</h1>
                        </div>
                        <div className="col-sm-12">
                            {friendsReviews}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Home
