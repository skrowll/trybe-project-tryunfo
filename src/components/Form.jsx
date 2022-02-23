import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input type="text" id="name" data-testid="name-input" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="textarea" id="description" data-testid="description-input" />
          </label>
          <label htmlFor="attr1">
            Attr1
            <input type="number" min="0" max="99" id="attr1" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2">
            Attr2
            <input type="number" min="0" max="99" id="attr2" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3">
            Attr3
            <input type="number" min="0" max="99" id="attr3" data-testid="attr3-input" />
          </label>
          <label htmlFor="image">
            Imagem
            <input type="text" id="image" data-testid="image-input" />
          </label>
          <label htmlFor="rare">
            Raridade
            <select id="rare" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input type="checkbox" id="trunfo" data-testid="trunfo-input" />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Forms;
