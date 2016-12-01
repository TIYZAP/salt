import React from 'react'
import Menu from './Menu'


class Review extends React.Component{
    constructor(props){
        super(props)
        this.submitReview = this.submitReview.bind(this)
        this.updateForm = this.updateForm.bind(this)
        this.bodyHandler = this.bodyHandler.bind(this)
        this.dishHandler = this.dishHandler.bind(this)
        this.ratingHandler = this.ratingHandler.bind(this)
        this.state = {
            searchResults: '',
            body: '',
            dish: '',
            rating: '',
            venue_name: '',
            venue_address: '',
            place_id: '',
            address: '',
            website: '',
            phone: '',
            photo: ''
        }
    }

    componentWillMount(){
        fetch('/search/place?place_id=' + window.location.href.split('?')[1].replace('place_id=','') + '&user_token=' + sessionStorage.getItem('token') + '&user_email' + sessionStorage.getItem('email'))
        .then(response => response.json())
        .then(response => this.setState({
            searchResults: response,
            name: response.name,
            address: response.formatted_address,
            place_id: response.place_id,
            website: response.website,
            phone: response.formatted_phone_number
        }))
        // .then(response => {
        //     console.log(response)
        // })
    }
    submitReview(){
        fetch('/reviews?'+ '&user_token=' + sessionStorage.getItem('token') + '&user_email=' + sessionStorage.getItem('email'), {
            body: JSON.stringify({
                body: this.state.body,
                venue_name: this.state.name,
                venue_address: this.state.address,
                place_id: this.state.place_id,
                rating: Number(this.state.rating),
                dish: this.state.dish
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }

        })
        .then(response => response.json())
    }
    // updateForm(){
    //     var updatedState = {}
    //     updatedState[event.target.name] = event.target.value
    //     this.setState(updatedState)
    // }
    bodyHandler(e){
        this.setState({
            body: e.target.value
        })
    }
    dishHandler(e){
        this.setState({
            dish: e.target.value
        })
    }
    ratingHandler(e){
        this.setState({
            rating: e.target.value
        })
    }
    render(){
        return (
            <div>
                <Menu />
            <div className="container">
              <div className="row">
                <h1 className="text-center">Please leave your review below</h1>
                <div className="col-sm-5">
                  <img height="300" className="img-rounded" src={this.state.searchResults.photos && this.state.searchResults.photos.length? 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=' + this.state.searchResults.photos[0].photo_reference + '&key=' + this.state.searchResults.photos[0].api_key :'http://unsplash.it/600?random'} alt="" />
                  <h4>Venue Name: {this.state.name}</h4>
                  <h4>Venue Website: <a href={this.state.website}>{this.state.website}</a></h4>
                  <h4>Venue Address: {this.state.address}</h4>
                  <h4>Venue Phone: {this.state.phone}</h4>
                </div>
                <div className="col-sm-7">
                  <label className="form-group">
                    What dish did you have?
                    <input type="text" name="dish" className="form-control" onChange={this.dishHandler}/>
                  </label>
                  <br />
                  <label className="form-group">
                    How would you rate it from 1-5?
                    <input type="text" name="rating" className="form-control" onChange={this.ratingHandler}/>
                  </label>
                  <label htmlFor="review">
                    Please write your review below:
                    <textarea name="name" rows="8" cols="80" name="body" onChange={this.bodyHandler}></textarea>
                  </label>
                  <button className="btn btn-success" onClick={this.submitReview}>Submit</button>
                </div>
              </div>
            </div>
        </div>
        )
    }
}
export default Review
