import React from 'react'
import Menu from './Menu'

class FriendProfile extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Menu />
            <div className="container-fluid friend-page">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-2 ">
                  <div className="col-sm-5 well friend-profile-pic">
                    <img className="img-thumbnail" src="http://unsplash.it/300/300?random" alt="" />
                  </div>
                </div>
                <div className="col-sm-8 col-sm-offset-2 well friend-review">
                      <div className="col-sm-4">
                          <img className="img-circle" src="http://unsplash.it/300/300?random" alt="" />
                      </div>
                      <div className="col-sm-8">
                          <h1>Jimmy John's</h1>
                          <p>Dish: Veggie Sub</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                </div>
                <div className="col-sm-8 col-sm-offset-2 well friend-review">
                      <div className="col-sm-4">
                          <img className="img-circle" src="http://unsplash.it/300/300?random" alt="" />
                      </div>
                      <div className="col-sm-8">
                          <h1>Jimmy John's</h1>
                          <p>Dish: Veggie Sub</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                </div>
                <div className="col-sm-8 col-sm-offset-2 well friend-review">
                      <div className="col-sm-4">
                          <img className="img-circle" src="http://unsplash.it/300/300?random" alt="" />
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
        )
    }
}
export default FriendProfile
