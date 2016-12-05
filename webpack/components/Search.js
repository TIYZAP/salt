import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'


class Search extends React.Component{
    constructor(props){
        super(props)
        this.typing = this.typing.bind(this)
        this.search = this.search.bind(this)
        this.enter = this.enter.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
        this.state = {
            searchResults: [],
            search: '',
            activePage: 1,
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
    handlePageChange(pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({activePage: pageNumber});
    }
    render(){
        var results = this.state.searchResults.map((result, i) => {
            return <Link to={'/review?place_id=' + result.place_id} key={i}>
            <div className="col-sm-12 home-middle-middle-review" >
                <div className="col-sm-4">
                    <img height="200" src={result.photo.length?'https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=' + result.photo[0].photo_reference + '&key=' + result.photo[0].api_key :'http://unsplash.it/600?random'} alt="" />
                </div>
                <div className="col-sm-8">
                    <h1 className="text-center">{result.name}</h1>
                    <h4>{result.vicinity}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div></Link>
        })
        return(
            <div className="container-fluid">
              <div className="row">
                  <Header />
                <div className="col-sm-12 home-middle-section">
                    <LeftMenu />
                  <div className="col-sm-8 home-middle-middle">
                      <div className="col-sm-12 home-middle-middle-search">
                          <div className="col-sm-6 col-sm-offset-3 search-wrapper">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Enter Zip Code/Address" value={this.state.search} onChange={this.typing} onKeyPress={this.enter} />
                              <span className="input-group-btn">
                                <button className="btn" type="button" value={this.state.search} onChange={this.typing} onClick={this.search}>Search</button>
                              </span>
                            </div>
                          </div>
                          {results}
                      </div>
                  </div>
                  <FriendSideBar />
                </div>
              </div>
            </div>
        )
    }
}
export default Search
