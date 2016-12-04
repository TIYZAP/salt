import React from 'react'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'

class FriendProfile extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container-fluid">
              <div className="row">
                  <Header />
                <div className="col-sm-12 home-middle-section">
                    <LeftMenu />
                  <div className="col-sm-8 home-middle-middle">
                      <div className="col-sm-12 home-middle-middle-friends-profile">
                        <div className="col-sm-12">
                          <div className="col-sm-4">
                            <img className="img-rounded" src="http://unsplash.it/300/300?random" alt="" />
                          </div>
                          <div className="col-sm-8 text-center">
                            <h1 className="friend-profile-name">Manny</h1>
                          </div>
                        </div>
                        <div className="col-sm-12 home-middle-middle-review">
                            <div className="col-sm-4">
                                <img src="http://unsplash.it/400/400?random" alt="" />
                                <h5 className="text-center">time</h5>
                            </div>
                            <div className="col-sm-8">
                                <h1 className="text-center">Restaurant Name</h1>
                                <h3>Dish</h3>
                                <h3>Rating</h3>
                                <h3>website</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 home-middle-middle-review">
                            <div className="col-sm-4">
                                <img src="http://unsplash.it/400/400?random" alt="" />
                                <h5 className="text-center">time</h5>
                            </div>
                            <div className="col-sm-8">
                                <h1 className="text-center">Restaurant Name</h1>
                                <h3>Dish</h3>
                                <h3>Rating</h3>
                                <h3>website</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                      </div>
                  </div>
                  <FriendSideBar />
                </div>
              </div>
            </div>
        )
    }
}
export default FriendProfile
