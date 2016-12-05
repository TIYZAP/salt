import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends React.Component {
    constructor() {
        super();
        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.props.updateRating(nextValue)
        this.setState({rating: nextValue});
    }

    render() {
        const { rating } = this.state;
        return (
            <div>
                <h2>Rating: {rating}</h2>
                <StarRatingComponent
                    name="rating"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}
export default StarRating
