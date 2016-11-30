import React from 'react'
import Menu from './Menu'


class Review extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: window.location.href.split('/')[4],
            searchResults: ''
        }
    }
    componentWillMount(){
        fetch('/search/' + this.state.id)
        .then(response => response.json())
        // .then(response => console.log(response))
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
                  <img className="img-rounded" src="http://unsplash.it/400/400?random" alt="" />
                  <h4>Venue Name:</h4>
                  <h4>Venue Address:</h4>
                </div>
                <div className="col-sm-7">
                  <label className="form-group">
                    What dish did you have?
                    <input type="text" className="form-control" />
                  </label>
                  <label for="review">
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
