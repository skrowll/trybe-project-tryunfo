import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="preview">
        <h3 className="title">Pré visualização</h3>
        <div className="card">
          <p data-testid="name-card" className="card-name"><b>{cardName}</b></p>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="card-image"
          />
          <p data-testid="description-card" className="card-description">
            {cardDescription}
          </p>
          <p data-testid="attr1-card" className="card-attr">
            Atributo 1...................................
            {cardAttr1}
          </p>
          <p data-testid="attr2-card" className="card-attr">
            Atributo 2...................................
            {cardAttr2}
          </p>
          <p data-testid="attr3-card" className="card-attr">
            Atributo 3...................................
            {cardAttr3}
          </p>
          <div className="card-footer">
            <p data-testid="rare-card" className="card-rare">
              <b>{cardRare}</b>
            </p>
            {cardTrunfo
              && <p data-testid="trunfo-card" className="super-trunfo">Super Trunfo</p>}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
