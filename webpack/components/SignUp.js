import React from 'react'
import { Link } from 'react-router'
class SignUp extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container-fluid signup-container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1 className="signup-page-text">Grain of Salt</h1>
                    </div>
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label for="avatar">Profile Picture</label>
                            <input type="file" id="profile-pic" name="profile-pic" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-6">
                                    <Link to="/landingpage"><button type="button" id="cancel-button" className="btn btn-danger btn-block">Cancel</button></Link>
                                </div>
                                <div className="col-sm-6">
                                    <button type="button" id="signup" className="btn btn-primary btn-block">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default SignUp
