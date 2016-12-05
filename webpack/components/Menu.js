import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';


let RadiumLink = Radium(Link);

export default React.createClass({
  logoutHandler: function(){
    sessionStorage.removeItem('email')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('id')
        window.location.href="/landingpage"
  },
  render() {
    return (
      <Menu>
        <div>
          <img src="http://unsplash.it/600/600?random" alt="" />
        </div>
        <RadiumLink className="menu-item" to="/">Home</RadiumLink>
        <RadiumLink className="menu-item" to="/friends">Friends</RadiumLink>
        <RadiumLink className="menu-item" to="/search">Search</RadiumLink>
        <RadiumLink className="menu-item" to="/signin">SignIn</RadiumLink>
        <button className="btn btn-block btn-danger menu-logout" onClick={this.logoutHandler}>Logout</button>
      </Menu>
    );
  }
});
