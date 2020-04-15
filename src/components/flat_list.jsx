import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map((flat, index) => {
      return <Flat
        imageUrl={flat.imageUrl}
        key={flat.name}
        price={flat.price}
        priceCurrency={flat.priceCurrency}
        name={flat.name}
        index={index}
        selected={flat.name === this.props.selectedFlat.name}
        selectFlat={this.props.selectFlat}
      />;
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
