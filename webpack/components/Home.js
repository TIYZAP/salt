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
                        <img src="http://unsplash.it/600/600?random" alt="" />
                    </div>
                    <ul>
                        <Link to="/"><li><a href="#">Home</a></li></Link>
                        <Link to="/friends"><li><a href="#">Friends</a></li></Link>
                        <Link to="/review"><li><a href="#">Review</a></li></Link>
                        <Link to="/search"><li><a href="#">Search</a></li></Link>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-sm-9 col-sm-offset-3 main-body-right">
                        <div className="text-center logo">
                            <h1>Grain of Salt</h1>
                        </div>
                        <div className="col-sm-12">
                            <ul className="timeline">
                                <li>
                                    <p className="timeline-date">Nov 2016</p>
                                    <div className="timeline-content">
                                        <div className="col-sm-4">
                                            <img src="http://unsplash.it/400/300?random" alt="" />
                                            <h1>Manny</h1>
                                        </div>
                                        <div className="col-sm-8">
                                            <h1>Jimmy John's</h1>
                                            <p>Dish: Veggie Sub</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p className="timeline-date">Nov 2016</p>
                                    <div className="timeline-content">
                                        <div className="col-sm-4">
                                            <img src="http://unsplash.it/400/300?random" alt="" />
                                            <h1>Manny</h1>
                                        </div>
                                        <div className="col-sm-8">
                                            <h1>Jimmy John's</h1>
                                            <p>Dish: Veggie Sub</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p className="timeline-date">Nov 2016</p>
                                    <div className="timeline-content">
                                        <div className="col-sm-4">
                                            <img src="http://unsplash.it/400/300?random" alt="" />
                                            <h1>Manny</h1>
                                        </div>
                                        <div className="col-sm-8">
                                            <h1>Jimmy John's</h1>
                                            <p>Dish: Veggie Sub</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p className="timeline-date">Nov 2016</p>
                                    <div className="timeline-content">
                                        <div className="col-sm-4">
                                            <img src="http://unsplash.it/400/300?random" alt="" />
                                            <h1>Manny</h1>
                                        </div>
                                        <div className="col-sm-8">
                                            <h1>Jimmy John's</h1>
                                            <p>Dish: Veggie Sub</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p className="timeline-date">Nov 2016</p>
                                    <div className="timeline-content">
                                        <div className="col-sm-4">
                                            <img src="http://unsplash.it/400/300?random" alt="" />
                                            <h1>Manny</h1>
                                        </div>
                                        <div className="col-sm-8">
                                            <h1>Jimmy John's</h1>
                                            <p>Dish: Veggie Sub</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p className="timeline-date">Nov 2016</p>
                                    <div className="timeline-content">
                                        <div className="col-sm-4">
                                            <img src="http://unsplash.it/400/300?random" alt="" />
                                            <h1>Manny</h1>
                                        </div>
                                        <div className="col-sm-8">
                                            <h1>Jimmy John's</h1>
                                            <p>Dish: Veggie Sub</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Home
