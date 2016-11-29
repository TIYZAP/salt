import React from 'react'

class Friends extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 main-body-home text-center logo">
                        <h1>Friends</h1>
                    </div>
                    <div className="col-sm-12">
                        <br />
                        <div className="form-group">
                            <input type="text" id="search" name="search" className="form-control"/>
                        </div>
                        <div className="col-sm-3 friend">
                            <img src="http://unsplash.it/300/300?random" alt="" />
                            <h3>Name</h3>
                        </div>
                        <div className="col-sm-3 friend">
                            <img src="http://unsplash.it/300/300?random" alt="" />
                            <h3>Name</h3>
                        </div>
                        <div className="col-sm-3 friend">
                            <img src="http://unsplash.it/300/300?random" alt="" />
                            <h3>Name</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Friends
