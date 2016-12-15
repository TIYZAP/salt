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
            <div className="row landing-container">
                        <div className="col-sm-12 landingpage-box text-center">
                                <h1>Grain of Salt</h1>
                                <h3>Restaurant reviews from your Facebook friends</h3>
                            <div className="col-sm-12 text-center">
                            <a className="btn btn-primary" href="/users/auth/facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i> Log In with Facebook</a>
                            </div>
                            <div className="col-sm-12 down-arrow" onClick={this.scrollHandler}><br/><i className="fa fa-angle-double-down fa-4x" aria-hidden="true"></i></div>
                        </div>
            </div>
            <div className="row tech-used">
                <h1 className="text-center">Tech Stack</h1>
                <ul>
                    <li><i className="devicon-html5-plain-wordmark"></i></li>
                    <li><i className="devicon-css3-plain-wordmark"></i></li>
                    <li><i className="devicon-sass-original"></i></li>
                    <li><i className="devicon-bootstrap-plain-wordmark"></i></li>
                    <li><i className="devicon-javascript-plain"></i></li>
                    <li><i className="devicon-react-original-wordmark"></i></li>
                    <br/>
                    <li><i className="devicon-git-plain-wordmark"></i></li>
                    <li><i className="devicon-github-plain-wordmark"></i></li>
                    <li><i className="devicon-heroku-plain-wordmark"></i></li>
                    <li><i className="devicon-ruby-plain-wordmark"></i></li>
                    <li><i className="devicon-rails-plain-wordmark"></i></li>
                    <li></li>
                </ul>
            </div>
            <div className="row landing2">
            </div>
            <div className="row about-container">
                    <div className="col-sm-12 text-center">
                        <h1>Mission</h1>
                        <h4>We made this website as a final project at The Iron Yard. Our goal was to make an social website where you and your trusted network can share reviews.</h4>
                    </div>

                    <div className="col-sm-4 text-center">
                        <img className="img-circle" src="/images/manny.jpg"></img>
                        <h5>Manpreet Singh (Manny)</h5>
                        <h5>Front-End Engineering Student</h5>
                        <h5>LinkedIn-<a href="https://www.linkedin.com/in/mannyy91s" target="_blank">https://www.linkedin.com/in/mannyy91s</a></h5>
                        <h5>GitHub-<a href="https://github.com/mannyy91s" target="_blank">https://github.com/mannyy91s</a></h5>
                        <h5>Email-<a href="mailto:mannyy91s@gmail.com">mannyy91s@gmail.com</a></h5>
                    </div>
                    <div className="col-sm-4 text-center">
                        <img className="img-circle" src="/images/Zach Pinner.jpg"></img>
                        <h5>Zach Pinner</h5>
                        <h5>Back-End Engineering Student</h5>
                        <h5>LinkedIn-<a href="https://www.linkedin.com/in/zapinner" target="_blank">https://www.linkedin.com/in/zapinner</a></h5>
                        <h5>GitHub-<a href="https://github.com/TIYZAP" target="_blank">https://github.com/TIYZAP</a></h5>
                        <h5>Email-<a href="mailto:zapinner@gmail.com">zapinner@gmail.com</a></h5>
                    </div>
                    <div className="col-sm-4 text-center">
                        <img className="img-circle" src="/images/Jon Krouse.jpg"></img>
                        <h5>Jon Krouse</h5>
                        <h5>Back-End Engineering Student</h5>
                        <h5>LinkedIn-<a href="https://www.linkedin.com/in/jon-krouse13" target="_blank">https://www.linkedin.com/in/jon-krouse13</a></h5>
                        <h5>GitHub-<a href="https://github.com/Jkrouse13" target="_blank">https://github.com/Jkrouse13</a></h5>
                        <h5>Email-<a href="mailto:jon.krouse@gmail.com">jon.krouse@gmail.com</a></h5>
                    </div>
                    <br/>
                    <br/>
            </div>
            </div>
        )
    }
}
export default LandingPage
