import React from 'react'
import { Link } from 'react-router'

class LandingPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container-fluid landing-container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 landingpage-box">
                            <div className="col-sm-12 text-center">
                                <h1>Grain of Salt</h1>
                                <h3>Reviews by your trusted network</h3>
                            </div>
                            <div className="col-sm-3 col-sm-offset-4">
                            <a className="btn btn-primary" href="/users/auth/facebook"><i className="fa fa-facebook-official fa-lg" aria-hidden="true"></i> Signin with Facebook</a>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default LandingPage
