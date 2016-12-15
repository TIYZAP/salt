import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';
import urlParse from 'url-parse'


let RadiumLink = Radium(Link);

export default React.createClass({
  getInitialState: function() {
    return {
        name: '',
        image: ''
    };
},
  logoutHandler: function(){
    sessionStorage.removeItem('email')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('id')
        window.location.href="/"
  },
  componentWillMount: function(){
      var url = new urlParse(window.location.href, true)
      fetch('/api/profile?id=' + (sessionStorage.getItem('id')?sessionStorage.getItem('id'):url.query.id))
      .then(response => response.json())
      .then(response => this.setState({
          name: response.user.name,
          image: response.user.image
      }))
  },
  render() {
    var styles = {
      bmBurgerButton: {
        zIndex: 200
      },
      bmMenuWrap: {
        zIndex: 202,
        left: 0
      }
    }
    return (
      <Menu styles={styles}>
        <div>
          <h3 className="text-center">{this.state.name}</h3>
        </div>
        <RadiumLink className="menu-item" to="/home"><i className="fa fa-home fa-2x" aria-hidden="true"></i><br />Home</RadiumLink>
        <RadiumLink className="menu-item" to="/search"><i className="fa fa-file-text-o fa-2x" aria-hidden="true"></i><br />Post a Review</RadiumLink>
        <RadiumLink className="menu-item" to="/yourprofile"><i className="fa fa-star fa-2x" aria-hidden="true"></i><br />Your Profile</RadiumLink>
        <RadiumLink className="menu-item" to="/friends"><i className="fa fa-users fa-2x" aria-hidden="true"></i><br />Friends</RadiumLink>
        <RadiumLink className="menu-item" onClick={this.logoutHandler}><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i><br />Logout</RadiumLink>
      </Menu>
    );
  }
});
