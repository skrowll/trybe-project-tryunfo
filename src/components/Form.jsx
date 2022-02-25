import React from 'react';
import PropTypes from 'prop-types';

class Forms extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="forms">
        <h3>Adicionar nova carta</h3>
        <form>
          <label htmlFor="name" className="name-label">
            Nome
            <input
              type="text"
              className="name-input"
              name="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description" className="description-label">
            Descrição
            <textarea
              type="textarea"
              maxLength="100"
              className="description-input"
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1" className="attributes">
            Atributo 1
            <input
              type="number"
              placeholder="0"
              min="0"
              max="99"
              id="attr1-input"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2" className="attributes">
            Atributo 2
            <input
              type="number"
              placeholder="0"
              min="0"
              max="99"
              id="attr2-input"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3" className="attributes">
            Atributo 3
            <input
              type="number"
              placeholder="0"
              min="0"
              max="99"
              id="attr3-input"
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image" id="image-label">
            Imagem
            <input
              type="text"
              id="image-input"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare" id="rare-label">
            Raridade
            <select
              id="rare-input"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo" id="trunfo-label">
            <input
              type="checkbox"
              id="trunfo-input"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
          <button
            type="submit"
            id="save-button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Forms.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Forms;
