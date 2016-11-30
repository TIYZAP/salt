import React from 'react'
import Menu from './Menu'


class Search extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
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
                    <input type="text" className="form-control" placeholder="Enter Zip Code/Address" />
                    <span className="input-group-btn">
                      <button className="btn" type="button">Search</button>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-sm-offset-3 search-results">
                  <div className="col-sm-5">
                    <img src="http://unsplash.it/300/300?random" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h2 className="text-center">Name of place</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
                <div className="col-sm-6 col-sm-offset-3 search-results">
                  <div className="col-sm-5">
                    <img src="http://unsplash.it/300/300?random" alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h2 className="text-center">Name of place</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
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
