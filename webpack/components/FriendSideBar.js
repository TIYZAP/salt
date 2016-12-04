import React from 'react'


class FriendSideBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            friends: []
        }
    }
    componentDidMount(){
        fetch('/friends/all?' + 'user_token=' + sessionStorage.getItem('token') + '&user_email=' + sessionStorage.getItem('email'))
        .then(response => response.json())
        .then(response => this.setState({
            friends: response.users
        }))
    }
    render(){
        var friendsList = this.state.friends.map((friend, i) =>{
        return    <div className="col-sm-12 home-each-friend" key={i}>
                      <div className="col-sm-4">
                        <img className="img-rounded" src={friend.image} alt="" />
                      </div>
                      <div className="col-sm-8">
                        {friend.name}
                      </div>
                    </div>
        })
        return(
            <div className="col-sm-2 home-middle-right">
                <h1>Friends</h1>
                {friendsList}
            </div>
        )
    }
}

export default FriendSideBar
