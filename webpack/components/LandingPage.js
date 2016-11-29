import React from 'react'

class LandingPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container-fluid landing-container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1>Grain of Salt</h1>
                            <h3>Reviews by your trusted network</h3>
                        </div>
                        <div className="col-sm-2 col-sm-offset-5">
                            <button id="signin" type="button" className="btn btn-primary btn-block">SignIn</button>
                        </div>
                        <div className="col-sm-2 col-sm-offset-5">
                            <button id="signup" type="button" className="btn btn-success btn-block">SignUp</button>
                        </div>
                </div>
            </div>
        )
    }
}
export default LandingPage
