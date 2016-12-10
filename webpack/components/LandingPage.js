import React from 'react'
import { Link } from 'react-router'

class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.scrollHandler = this.scrollHandler.bind(this)
    }
    scrollHandler(){
        window.scrollTo(0,900)
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
                    <div className="col-sm-12">
                        <h1 className="text-center">About Us</h1>
                    </div>
                    <div className="col-sm-12 text-center">
                        <h3>Mission</h3>
                        <p>We made this website as a final project at The Iron Yard. Our goal was to produce an social website like experience for reviews that you can trust from your network.</p>
                    </div>
                    <div className="col-sm-4 text-center">
                        <img className="img-circle" src="https://robohash.org/manny"></img>
                        <h5>Manpreet Singh</h5>
                        <h5>Front-End Engineering Student</h5>
                        <h5>LinkedIn-</h5>
                        <h5>GitHub-</h5>
                        <h5>Email-</h5>
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
            </div>
        )
    }
}
export default LandingPage
