import React from 'react'
import Menu from './Menu'


class Friends extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friends: []
        }
    }
    componentDidMount(){
        fetch('/friends/all' + + '&x-user-token=' + sessionStorage.getItem('token') + '&x-user-email' + sessionStorage.getItem('email'))
        .then(response => response.json())
        .then(response => this.setState({
            friends: response
        }))
        // .then(response => {
        //     console.log('test')
        // })
    }
    render(){
        var myFriends = this.state.friends.map((friend, i) =>{
        return      <div className="col-sm-3 friend" key={i}>
                        <img src={friend.image} alt="" />
                        <h3>Name: {friend.name}</h3>
                        {/* <h3>Reviews: <span className="badge">{friend.reviews.length}</span></h3> */}
                    </div>
        })
        return(
            <div>
                <Menu />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 main-body-home text-center logo">
                        <h1>Friends</h1>
                    </div>
                    <div className="col-sm-12">
                        <br />
                        <div className="form-group">
                            <input type="text" id="search" name="search" className="form-control"/>
                        </div>
                        {myFriends}
                    </div>
                </div>
            </div>
        </div>

        )
    }
}
export default Friends
