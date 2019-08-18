import React, { Component } from 'react'
import './styles.css';
import StarRatings from 'react-star-ratings';
import calculateSale from '../../helpers/calculateSale';

export default class ListItem extends Component {
  render() {
    const { 
      post_title,
      images, 
      regular_price, 
      sale_price, 
      rating_reviews: { rating, reviews} 
    } = this.props.item;
    const { onClick } = this.props;

    return (
      <div className="list-item" onClick={onClick}>
        <img alt={post_title} className='product-image' src={images} />
        <p className='product-title'>{post_title}</p>
        <div className='info-product'>
          <div className='rating-info'>
            <StarRatings
              rating={rating}
              starRatedColor="yellow"
              numberOfStars={5}
              name='rating'
              starDimension='20px'
            />
          </div>
          <span className='rating-reviews'>{reviews} (reviews)</span>
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
