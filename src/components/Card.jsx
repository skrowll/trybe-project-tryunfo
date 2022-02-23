import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      // cardDescription,
      // cardAttr1,
      // cardAttr2,
      // cardAttr3,
      // cardImage,
      // cardRare,
      // cardTrunfo,
      // hasTrunfo,
    } = this.props;

    return (
      <div>
        <p data-testid="name-card">{cardName}</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  // cardDescription: PropTypes.string.isRequired,
  // cardAttr1: PropTypes.string.isRequired,
  // cardAttr2: PropTypes.string.isRequired,
  // cardAttr3: PropTypes.string.isRequired,
  // cardImage: PropTypes.string.isRequired,
  // cardRare: PropTypes.string.isRequired,
  // cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
};

export default Card;
