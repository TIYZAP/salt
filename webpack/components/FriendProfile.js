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
        // .then(response => {
        //     console.log(response)
        // })
    }

    render(){
        var userReviews = this.state.reviews.map((review, i) => {
            return       <div className="col-sm-12 home-middle-middle-friendsreview" key={i}>
                            <div className="col-sm-4">
                                <img  className="img-rounded" src={review.image} alt="" />
                                <p className="text-center">{moment(review.created_at).fromNow()}</p>
                            </div>
                            <div className="col-sm-8">
                                <Link to={"/readreview?place_id=" + review.place_id}>
                                <h1 className="text-center">{review.venue_name}</h1>
                                </Link>
                                <p>Dish: {review.dish}</p>
                                Rating: <ReactStars count={review.rating} edit={false} color1={'#Eb8a3e'}/>
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
                        </div>
                        <FriendSideBar />
                    </div>
                </div>
            </div>
        )
    }
}
export default FriendProfile
