import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import ReactStars from 'react-stars'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'
import urlParse from 'url-parse'
import StarRating from './StarRating'


class Home extends React.Component {
    constructor(props){
        super(props)
        this.followAllFriends = this.followAllFriends.bind(this)
        this.state = {
        allReviews:[]
        }
    }
    componentWillMount(){
        if(sessionStorage.getItem('token') === null){
            window.location.href = "/"
        }
    }
    componentDidMount(){
        if(window.location.href.includes('email')){
            var url = new urlParse(window.location.href, true)
            sessionStorage.setItem('email', url.query.email)
            sessionStorage.setItem('token', url.query.token)
            sessionStorage.setItem('id', url.query.id)
            window.location.href = '/home'
        }
        fetch('/api/timeline?' + 'user_token=' + sessionStorage.getItem('token') + '&user_email=' + sessionStorage.getItem('email'))
        .then(response => response.json())
        .then(response => this.setState({
            allReviews: response.reviews}))
        // .then(response => {console.log(response)})
    }
    followAllFriends(){
        fetch('/api/facebook/follow?user_email=' + sessionStorage.getItem('email') + '&user_token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => window.location.href="/home")
    }
    render(){
        if(this.state.allReviews.length ){
            var friendsReviews = this.state.allReviews.map((review, i) => {
                return  (
                    <div className="col-sm-5 home-middle-middle-review" key={i}>
                        <div className="row">
                            <div className="col-sm-4">
                              <p className="text-center">{review.user.name}</p>
                                <img height="100" className="img-rounded" src={review.image} alt="Reviewers Picture" />
                                <p className="text-center">{moment(review.created_at).fromNow()}</p>
                            </div>
                            <div className="col-sm-8">
                                <Link to={'/readreview?place_id=' + review.place_id} >
                                <h4 className="text-center">{review.venue_name}</h4>
                                </Link>
                                {/* <h5>Address: {review.venue_address}</h5>
                                <h5>Phone: {review.phone}</h5>
                                <h5>Website: <a href={review.website}>Link to website</a></h5> */}
                                Rating: <ReactStars count={review.rating} edit={false} color1={'#Eb8a3e'}/>
                                <p>Dish: {review.dish}</p>
                                <h5>Review: <br />{review.body}</h5>
                            </div>
                        </div>
                    </div>
                )}
            )
        }
        else{
            var friendsReviews =  <div className="col-sm-8 col-sm-offset-2 homepage-box">
                                    <div className="col-sm-12">
                                        <h1 className="text-center">Welcome User!</h1>
                                        <br />
                                        <h2 className="text-center">To Get Started:</h2>
                                        <h2 className="text-center">Add Facebook friends using this app <button className="btn btn-info" onClick={this.followAllFriends}><i className="fa fa-facebook-official fa-lg" aria-hidden="true"> </i>Follow FB friends</button></h2>
                                        <h2 className="text-center">Find a Restaurant and their reviews: <Link to="/search"><button className="btn btn-default my-button">Review Section</button></Link></h2>
                                    </div>
                                </div>
        }
        return(
            <div>
                <Menu />
                <Header />
                <div className="row home-middle-section">
                  <LeftMenu />
                  <div className={this.state.allReviews.length?"col-sm-8 home-middle-middle":"col-sm-10 home-middle-middle"}>
                    {friendsReviews}
                  </div>
                  {this.state.allReviews.length?<FriendSideBar />:''}
              </div>
            </div>
        )
    }
}
export default Home
