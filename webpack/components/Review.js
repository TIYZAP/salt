import React from 'react'
import Menu from './Menu'


class Review extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchResults: ''
        }
    }
    componentWillMount(){
        fetch('/search/place?place_id=' + window.location.href.split('?')[1].replace('place_id=',''))
        .then(response => response.json())
        .then(response => this.setState({searchResults: response}))
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
                  <h4>Venue Name: {this.state.searchResults.name}</h4>
                  <h4>Venue Website: <a href={this.state.searchResults.website}>{this.state.searchResults.website}</a></h4>
                  <h4>Venue Address: {this.state.searchResults.formatted_address}</h4>
                  <h4>Venue Phone: {this.state.searchResults.formatted_phone_number}</h4>
                </div>
                <div className="col-sm-7">
                  <label className="form-group">
                    What dish did you have?
                    <input type="text" className="form-control" />
                  </label>
                  <label htmlFor="review">
                    Please write your review below:
                    <textarea name="name" rows="8" cols="80"></textarea>
                  </label>
                  <button type="submit" className="btn btn-success">Submit</button>
                </div>
              </div>
            </div>
        </div>
        )
    }
}
export default Review
