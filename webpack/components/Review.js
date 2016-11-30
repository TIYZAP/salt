import React from 'react'

class Review extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container">
              <div className="row">
                <h1 className="text-center">Please leave your review below</h1>
                <div className="col-sm-5">
                  <img className="img-rounded" src="http://unsplash.it/400/400?random" alt="" />
                  <h4>name of place goes here</h4>
                  <h4>Contact Information</h4>
                  <h4>Address</h4>
                  <h4>Phone</h4>
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
        )
    }
}
export default Review
