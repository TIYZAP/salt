import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import Signup from './components/Signup'
import Home from './components/Home'
import Friends from './components/Friends'


document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/friends" component={Friends} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/landingpage" component={LandingPage} />
        </Router>
        ,document.getElementById('app')
    )
})
