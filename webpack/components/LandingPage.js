import React from 'react'
import { Link } from 'react-router'

class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.scrollHandler = this.scrollHandler.bind(this)
    }
    scrollHandler(){
        window.scrollTo(0,800)
    }
    render(){
        return(
            <div>
            <div className="container-fluid landing-container">
                    <div className="row">
                        <div className="col-sm-12 landingpage-box text-center">
                                <h1>Grain of Salt</h1>
                                <h3>Restaurant reviews from your Facebook friends</h3>
                            <div className="col-sm-12 text-center">
                            <a className="btn btn-primary" href="/users/auth/facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i> Log In with Facebook</a>
                            </div>
                            <div className="col-sm-12 down-arrow" onClick={this.scrollHandler}>Click or Scroll<br/><i className="fa fa-angle-double-down fa-4x" aria-hidden="true"></i></div>
                        </div>
                </div>
            </div>
            <div className="container-fluid about-container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Mission</h1>
                        <h4>We made this website as a final project at The Iron Yard. Our goal was to make an social website where you and your trusted network can share reviews.</h4>
                    </div>

                    <div className="col-sm-4 text-center">
                        <img className="img-circle" src="/images/manny.jpg"></img>
                        <h5>Manpreet Singh (Manny)</h5>
                        <h5>Front-End Engineering Student</h5>
                        <h5>LinkedIn-<a href="https://www.linkedin.com/in/mannyy91s">https://www.linkedin.com/in/mannyy91s</a></h5>
                        <h5>GitHub-<a href="https://github.com/mannyy91s">https://github.com/mannyy91s</a></h5>
                        <h5>Email-<a href="mannyy91s@gmail.com">mannyy91s@gmail.com</a></h5>
                    </div>
                    <div className="col-sm-4 text-center">
                        <img className="img-circle" src="https://robohash.org/zach"></img>
                        <h5>Zach</h5>
                        <h5>Back-End Engineering Student</h5>
                        <h5>LinkedIn-</h5>
                        <h5>GitHub-</h5>
                        <h5>Email-</h5>
                    </div>
                    <div className="col-sm-4 text-center">
                        <img className="img-circle" src="https://robohash.org/jon"></img>
                        <h5>Jon</h5>
                        <h5>Back-End Engineering Student</h5>
                        <h5>LinkedIn-</h5>
                        <h5>GitHub-</h5>
                        <h5>Email-</h5>
                    </div>
                </div>
            </div>
            <div className="container-fluid landing2">
            </div>
            <div className="container-fluid tech-used">
                <h1 className="text-center">Technology Used</h1>
                <ul>
                    <li><i className="devicon-html5-plain-wordmark"></i></li>
                    <li><i className="devicon-css3-plain-wordmark"></i></li>
                    <li><i className="devicon-sass-original"></i></li>
                    <li><i className="devicon-bootstrap-plain-wordmark"></i></li>
                    <li><i className="devicon-javascript-plain"></i></li>
                    <li><i className="devicon-react-original-wordmark"></i></li>
                    <br/>
                    {/* <li><i className="devicon-atom-original-wordmark"></i></li> */}
                    <li><i className="devicon-git-plain-wordmark"></i></li>
                    <li><i className="devicon-github-plain-wordmark"></i></li>
                    <li><i className="devicon-heroku-plain-wordmark"></i></li>
                    <li><i className="devicon-ruby-plain-wordmark"></i></li>
                    <li><i className="devicon-rails-plain-wordmark"></i></li>
                    <li></li>
                </ul>
            </div>
            </div>
        )
    }
}
export default LandingPage
