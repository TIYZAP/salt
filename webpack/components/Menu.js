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
        window.location.href="/"
  },
  render() {
    return (
      <Menu>
        <div>
          <img className="img-circle" src="http://unsplash.it/600/600?random" alt="" />
        </div>
        <RadiumLink className="menu-item" to="/"><i className="fa fa-home fa-2x" aria-hidden="true"></i><br />Home</RadiumLink>
        <RadiumLink className="menu-item" to="/friends"><i className="fa fa-users fa-2x" aria-hidden="true"></i><br />Friends</RadiumLink>
        <RadiumLink className="menu-item" to="/search"><i className="fa fa-plus fa-2x" aria-hidden="true"></i><br />Review</RadiumLink>
        <button id="menu-logout-button" className="btn btn-default" onClick={this.logoutHandler}><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i><br />Logout</button>
      </Menu>
    );
  }
});
