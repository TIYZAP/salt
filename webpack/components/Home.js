import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Menu />
            <div className="container-fluid main-body-home">
                <div className="nav-bar-left">
                    <div>
                        <img className="img-thumbnail" src="http://unsplash.it/600/600?random" alt="" />
                    </div>
                    <ul>
                        <Link to="/" style={{textDecoration: 'none'}}><li>Home</li></Link>
                        <Link to="/friends" style={{textDecoration: 'none'}}><li>Friends</li></Link>
                        <Link to="/review" style={{textDecoration: 'none'}}><li>Review</li></Link>
                        <Link to="/search" style={{textDecoration: 'none'}}><li>Search</li></Link>
                        <Link to="/friendprofile" style={{textDecoration: 'none'}}><li>FriendProfile</li></Link>
                        <Link to="/landingpage" style={{textDecoration: 'none'}}><li>LandingPage</li></Link>
                        <Link to="/signin" style={{textDecoration: 'none'}}><li>Signin</li></Link>
                        <Link to="/signup" style={{textDecoration: 'none'}}><li>Signup</li></Link>
                        <li>Logout</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-sm-9 col-sm-offset-3 main-body-right">
                        <div className="text-center logo">
                            <h1>Grain of Salt</h1>
                        </div>
                        <div className="col-sm-12">
                            <div className="col-sm-8 col-sm-offset-2 reviews">
                                <div className="col-sm-4">
                                    <img className="img-thumbnail" src="http://unsplash.it/400/300?random" alt="" />
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
                                    <img className="img-thumbnail" src="http://unsplash.it/400/300?random" alt="" />
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
                                    <img className="img-thumbnail" src="http://unsplash.it/400/300?random" alt="" />
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
                                    <img className="img-thumbnail" src="http://unsplash.it/400/300?random" alt="" />
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
