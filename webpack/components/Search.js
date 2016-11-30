import React from 'react'
import Menu from './Menu'


class Search extends React.Component{
    constructor(props){
        super(props)
        this.typing = this.typing.bind(this)
        this.search = this.search.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
        this.state = {
            searchResults: [],
            search: '',
            name: ''
        }
    }
    typing(e){
        this.setState({
            search: e.target.value
        })
    }
    search(e){
        var updateResults = this.state.search
        if(e.key === 'Enter'){
            this.setState({
                search: e.target.value
            })
            this.updateSearch(updateResults)
            this.setState({
                search: ''
            })
        }
    }
    updateSearch(updateResults){
        fetch('/jon?address=' + this.state.search)
        .then(response => response.json())
        .then(response => this.setState({searchResults: response}))
        // .then(response => {
        //     console.log(response[0].photos.photo_reference)
        // })
    }
    render(){
        var results = this.state.searchResults.map((result, i) => {
            return <div className="col-sm-6 col-sm-offset-3 search-results" key={i}>
              <div className="col-sm-5">
                <img src={'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + result.photos.photo_reference + '&key=AIzaSyCLWARDbqg4WhZsc948xtGX0W2NZNcaG10'} alt="" />
              </div>
              <div className="col-sm-7">
                <h2 className="text-center">{result.name}</h2>
                <h4 className="text-center">{result.vicinity}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
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
                    <input type="text" className="form-control" placeholder="Enter Zip Code/Address" value={this.state.search} onChange={this.typing} onKeyPress={this.search} />
                    <span className="input-group-btn">
                      <button className="btn" type="button">Search</button>
                    </span>
                  </div>
                </div>
                {results}
                <div className="col-sm-6 col-sm-offset-3 search-results">
                  <div className="col-sm-5">
                    <img src="http://unsplash.it/300/300?random" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h2 className="text-center">Name of place</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        )
    }
}
export default Search
