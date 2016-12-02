import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'


class Search extends React.Component{
    constructor(props){
        super(props)
        this.typing = this.typing.bind(this)
        this.search = this.search.bind(this)
        this.enter = this.enter.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
        this.state = {
            searchResults: [],
            search: ''
        }
    }
    typing(e){
        this.setState({
            search: e.target.value
        })
    }
    enter(e){
        if(e.key === 'Enter'){
            this.search(e)
        }
    }
    search(e){
        var updateResults = this.state.search
        this.setState({
            search: e.target.value
        })
        this.updateSearch(updateResults)
        this.setState({
            search: ''
        })
    }
    updateSearch(updateResults){
        fetch('/search?address=' + this.state.search)
        .then(response => response.json())
        .then(response => this.setState({searchResults: response}))
        // .then(response => {
        //     console.log(response[0].photos.photo_reference)
        // })
    }
    render(){
        var results = this.state.searchResults.map((result, i) => {
            // console.log(result)
            return <Link to={'/review?place_id=' + result.place_id} key={i}>
            <div className="col-sm-6 col-sm-offset-3 search-results">
              <div className="col-sm-5">
                <img height="200" src={result.photo.length?'https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=' + result.photo[0].photo_reference + '&key=' + result.photo[0].api_key :'http://unsplash.it/600?random'} alt="" />
              </div>
              <div className="col-sm-7">
                <h2 className="text-center">{result.name}</h2>
                <h4 className="text-center">{result.vicinity}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            </Link>
        })
        return(
            <div>
                <Menu />
            <div className="container-fluid search-page-container">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h3>Search for your favorite restaurants</h3>
                </div>
                <div className="col-sm-6 col-sm-offset-3 search-wrapper">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter Zip Code/Address" value={this.state.search} onChange={this.typing} onKeyPress={this.enter} />
                    <span className="input-group-btn">
                      <button className="btn" type="button" value={this.state.search} onChange={this.typing} onClick={this.search}>Search</button>
                    </span>
                  </div>
                </div>
                {results}
                {/* <div className="col-sm-6 col-sm-offset-3 search-results">
                  <div className="col-sm-5">
                    <img src="https://maps.google.com/?cid=5102160940829361475" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h2 className="text-center">Name of place</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div> */}
              </div>
            </div>
            </div>
        )
    }
}
export default Search
