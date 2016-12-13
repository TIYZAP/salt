import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'
import moment from 'moment'
import ReactStars from 'react-stars'


class FriendProfile extends React.Component{
    constructor(props){
        super(props)
        this.getProfile = this.getProfile.bind(this)
        this.state = {
            id: props.params.id,
            image: '',
            name: '',
            reviews: [],
            badges: []
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
            reviews: response.user.reviews,
            badges: response.user.badges
        }))
    }

    render(){
        var userBadges = this.state.badges.map((badge, i) => {
            return <h5 key={i}>{badge.description}</h5>
        })
        var userReviews = this.state.reviews.map((review, i) => {
            return       <div className="col-sm-11 home-middle-middle-friendsreview" key={i}>
                            <div className="col-sm-4">
                                <img height="250" width="200" src={review.image} alt="" />
                                <p className="text-center">{moment(review.created_at).fromNow()}</p>
                            </div>
                            <div className="col-sm-8">
                                <Link to={"/readreview?place_id=" + review.place_id}>
                                <h2 className="text-center">{review.venue_name}</h2>
                                </Link>
                                <ReactStars count={review.rating} edit={false} color1={'#Eb8a3e'}/>
                                <p>Dish: {review.dish}</p>
                                <p>website: <a href={review.website}>Link to website</a></p>
                                <h5>Review: <br />{review.body}</h5>
                            </div>
                         </div>
        })
        return (
            <div>
                <Header />
                <Menu />
                <div className="row">
                    <div className="home-middle-section">
                        <LeftMenu  {...this.props}/>
                        <div className="col-sm-8 home-middle-middle">
                            <div className="row">
                                <div className="col-sm-12 home-middle-middle-friends-profile">
                                    <div className="row friends-profile-background">
                                        <div className="col-sm-4">
                                            <img  height="300" width="200" src={this.state.image} alt="" />
                                        </div>
                                        <div className="col-sm-8">
                                            <h3 className="friend-profile-name">{this.state.name}</h3>
                                            <h4>Points: <span className="badge">{this.state.reviews.length}0</span></h4>
                                            <h4>Achievements:</h4>
                                            {userBadges}
                                        </div>
                                    </div>
                                    <div className="row">
                                        {userReviews}
                                    </div>
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
