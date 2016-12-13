import React from 'react'
import { Link } from 'react-router'
import urlParse from 'url-parse'

class LeftMenu extends React.Component {
    constructor(props){
        super(props)
        this.followAllFriends = this.followAllFriends.bind(this)
        this.state = {
            name: '',
            image: '',
            reviews: []
        }
    }
    componentWillMount(){
        var url = new urlParse(window.location.href, true)
        fetch('/api/profile?id=' + (sessionStorage.getItem('id')?sessionStorage.getItem('id'):url.query.id))
        .then(response => response.json())
        .then(response => this.setState({
            name: response.user.name,
            image: response.user.image,
            reviews: response.user.reviews
        }))
        // .then(response => {
        //     console.log(response)
        // })
    }
    followAllFriends(){
        fetch('/api/facebook/follow?user_email=' + sessionStorage.getItem('email') + '&user_token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => window.location.href="/friends")
    }
    render(){
        // console.log(this.props)
        return(
            <div className="col-sm-2 home-middle-left text-center">
              <div>
                  <h1 className="text-center">{this.state.name}</h1>
                  <img className="img-responsive" src={this.state.image} alt="User Profile Picture" />
                  <p>Points: <span className="badge">{this.state.reviews.length}0</span></p>
              </div>
              <ul>
                 <Link to="/home" style={{textDecoration:'none'}}><li className={this.props.route.path === '/home'?"nav active":"nav"} onClick={this.activeHandler}><i className="fa fa-home fa-2x" aria-hidden="true"></i><br />Home</li></Link>
                 <Link to="/search" style={{textDecoration:'none'}}><li className={this.props.route.path === '/search'?"nav active":"nav"} onClick={this.activeHandler}><i className="fa fa-file-text-o fa-2x" aria-hidden="true"></i><br />Post Review</li></Link>
                 <Link to="/yourprofile" style={{textDecoration:'none'}}><li className={this.props.route.path === '/yourprofile'?"nav active":"nav"} onClick={this.activeHandler}><i className="fa fa-star fa-2x" aria-hidden="true"></i><br />Your Reviews</li></Link>
                 <Link to="/friends" style={{textDecoration:'none'}}><li className={this.props.route.path === '/friends'?"nav active":"nav"} onClick={this.activeHandler}><i className="fa fa-users fa-2x" aria-hidden="true"></i><br />Friends</li></Link>
                 {/* <li onClick={this.followAllFriends}><i className="fa fa-facebook-official fa-lg" aria-hidden="true"> Follow fb friends</i></li> */}
              </ul>
            </div>
        )
    }
}
export default LeftMenu
