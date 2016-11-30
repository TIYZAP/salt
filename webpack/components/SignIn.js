import React from 'react'

class SignIn extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container-fluid signin-container">
             <div className="row">
               <h1 className="text-center">Grain of Salt</h1>
                <div className="col-sm-6 col-sm-offset-3 text-center fb-button">
                  <button className="btn btn-primary"><i className="fa fa-facebook-official fa-lg" aria-hidden="true"></i> Signin with Facebook
                  </button>
                  <h4>or</h4>
                  <hr />
                </div>
                <div className="col-sm-6 col-sm-offset-3">
                  <div className="form-group">
                    <label>Email</label>
                    <input id="signInEmail" type="text" name="email" className="form-control" required/>
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input id="signInPassword" type="password" name="password" className="form-control" required/>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <a href="#">Forget Password?</a>
                    </div>
                    <div className="col-sm-6 text-right">
                      <button id="login" type="button" className="btn btn-success">Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
export default SignIn
