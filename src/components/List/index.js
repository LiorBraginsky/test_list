import React, { Component } from 'react'
import './styles.css';
import productList from '../../assets/product_lists.json';
import ListItem from '../ListItem';

let list = productList.results[0].hits

class List extends Component {
  handleClick = (item) => {
    this.props.history.push({
      pathname: `/item-details/${item.post_id}`,
      state: { detail: item }
    })
  }

  render() {
    return (
      <div className='list'>
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onClick={() => this.handleClick(item)}         
          />
        ))
        }
      </div>
    )
  }
}

export default List;
