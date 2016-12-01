import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import urlParse from 'url-parse'

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var url = new urlParse(window.location.href, true)
        console.log(url)
        sessionStorage.setItem('email', url.query.email)
        sessionStorage.setItem('token', url.query.token)
    }
    render(){
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
                        <Link tp="/landingpage"><li><i className="fa fa-sign-out" aria-hidden="true"> Logout</i></li></Link>
                    </ul>
                </div>
            <div className="container-fluid main-body-home">
                <div className="row">
                    <div className="col-sm-12 col-sm-offset-3 main-body-right">
                        <div className="col-sm-9 text-center logo">
                            <h1>Grain of Salt</h1>
                        </div>
                        <div className="col-sm-12">
                            <div className="col-sm-8 col-sm-offset-2 reviews">
                                <div className="col-sm-4">
                                    <img className="img-rounded" src="http://unsplash.it/400/300?random" alt="" />
                                    <h1>Manny</h1>
                                </div>
                                <div className="col-sm-8">
                                    <h1>Jimmy John's</h1>
                                    <p>Dish: Veggie Sub</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-sm-8 col-sm-offset-2 reviews">
                                <div className="col-sm-4">
                                    <img className="img-rounded" src="http://unsplash.it/400/300?random" alt="" />
                                    <h1>Manny</h1>
                                </div>
                                <div className="col-sm-8">
                                    <h1>Jimmy John's</h1>
                                    <p>Dish: Veggie Sub</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-sm-8 col-sm-offset-2 reviews">
                                <div className="col-sm-4">
                                    <img className="img-rounded" src="http://unsplash.it/400/300?random" alt="" />
                                    <h1>Manny</h1>
                                </div>
                                <div className="col-sm-8">
                                    <h1>Jimmy John's</h1>
                                    <p>Dish: Veggie Sub</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-sm-8 col-sm-offset-2 reviews">
                                <div className="col-sm-4">
                                    <img className="img-rounded" src="http://unsplash.it/400/300?random" alt="" />
                                    <h1>Manny</h1>
                                </div>
                                <div className="col-sm-8">
                                    <h1>Jimmy John's</h1>
                                    <p>Dish: Veggie Sub</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Home
