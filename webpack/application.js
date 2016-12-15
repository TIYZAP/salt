import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Friends from './components/Friends'
import Search from './components/Search'
import FriendProfile from './components/FriendProfile'
import Review from './components/Review'
import ReadReview from './components/ReadReview'
import YourProfile from './components/YourProfile'


document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/friends" component={Friends} />
            <Route path="/yourprofile" component={YourProfile} />
            <Route path="/search" component={Search} />
            <Route path="/friendprofile/:id" component={FriendProfile} />
            <Route path="/review" component={Review} />
            <Route path="/readreview" component={ReadReview} />
        </Router>
        ,document.getElementById('app')
    )
})
