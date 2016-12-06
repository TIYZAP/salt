import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import LeftMenu from './LeftMenu'
import Header from './Header'
import FriendSideBar from './FriendSideBar'


class Search extends React.Component{
    constructor(props){
        super(props)
        this.search = this.search.bind(this)
        this.enter = this.enter.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
        this.state = {
            searchResults: [],
            activePage: 1
        }
    }
    enter(e){
        if(e.key === 'Enter'){
            this.search(e)
        }
    }
    search(e){
        var zip = this._inputZip.value
        var place = this._inputPlace.value
        console.log(zip, place)
        this.updateSearch(zip, place)
        zip = ''
        place = ''
        e.preventDefault()
    }
    updateSearch(zip, place){
        fetch('/search?address=' + zip + '&name=' + place)
        .then(response => response.json())
        .then(response => this.setState({searchResults: response}))
        // .then(response => {
        //     console.log(response[0].photos.photo_reference)
        // })
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
            <div>
                <Menu />
              <div className="row">
                  <Header />
                <div className="col-sm-12 home-middle-section">
                    <LeftMenu />
                  <div className="col-sm-8 home-middle-middle">
                      <div className="col-sm-12 home-middle-middle-search">
                          <div className="col-sm-6 col-sm-offset-3 search-wrapper">
                              <form onSubmit={this.search}>
                            <div className="input-group">
                              <input type="text"  className="form-control" placeholder="Enter Zip Code/Address" ref={(a) => this._inputZip = a} onKeyPress={this.enter} />
                              <input type="text" className="form-control" placeholder="Enter name of place" ref={(a) => this._inputPlace = a} onKeyPress={this.enter} />
                              <span className="input-group-btn">
                                <button className="btn" type="submit">Search</button>
                              </span>
                            </div>
                            </form>
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
