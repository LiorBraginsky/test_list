import React, { Component } from 'react'
import './styles.css';
import { withRouter } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import calculateSale from '../../helpers/calculateSale';

class DetailsPage extends Component {

  handleGoBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { 
      post_title, 
      images, 
      rating_reviews: { rating, reviews }, 
      regular_price, 
      sale_price, 
    } = this.props.location.state.detail;
  
    return (
      <div className='details-page'>
        <button onClick={this.handleGoBack}>Back</button>
        <div className='details-info'>
          <p>{post_title}</p>
          <StarRatings
              rating={rating}
              starRatedColor="yellow"
              numberOfStars={5}
              name='rating'
              starDimension='30px'
          />
          <span className='rating-reviews'>{reviews}</span>
        </div>
        <img alt={post_title} className='product-image-details' src={images} />
        <div>
          {sale_price == null ? (
              <p className='sale-price'>Price {regular_price}$ </p>
            ) : (
              <div>
            <p>
              <span className='regular-price'>{regular_price}$</span>
              <span className='sale-count'>{`Sale ${calculateSale(sale_price, regular_price)}%`}</span>
            </p>
            <span className='sale-price'>New price: {sale_price}$</span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(DetailsPage);