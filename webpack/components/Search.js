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
            return <div className="col-sm-3 home-middle-middle-search-review" key={i}>
                    <div className="col-sm-12">
                        <h4 className="text-center">{result.name}</h4>
                        <img height="200" src={result.photo.length?'https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=' + result.photo[0].photo_reference + '&key=' + result.photo[0].api_key :'http://unsplash.it/600?random'} alt="" />
                    </div>
                    <div className="col-sm-12">
                        <h5>{result.vicinity}</h5>
                    </div>
                    <div className="col-sm-12">
                        <div className="col-sm-6">
                            <button className="btn read-review-button btn-primary">Read Review</button>
                        </div>
                        <div className="col-sm-6">
                            <Link to={'/review?place_id=' + result.place_id} >
                            <button className="btn post-review-button btn-success">Post Review</button>
                            </Link>
                        </div>
                    </div>
                </div>
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
