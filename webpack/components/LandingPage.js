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
                            <div className="col-sm-3 col-sm-offset-2">
                                <Link to="/signin"><button id="signin" type="button" className="btn btn-primary btn-block">SignIn</button></Link>
                            </div>
                            <div className="col-sm-3 col-sm-offset-2">
                                <Link to="/signup"><button id="signup" type="button" className="btn btn-success btn-block">SignUp</button></Link>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default LandingPage
