import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validate = this.validate.bind(this);
    this.validateTrunfo = this.validateTrunfo.bind(this);
  }

  onInputChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: value,
    }, this.validate);
  }

  onSaveButtonClick() {
    const { state } = this;
    const newCard = {
      cardName: state.cardName,
      cardDescription: state.cardDescription,
      cardAttr1: state.cardAttr1,
      cardAttr2: state.cardAttr2,
      cardAttr3: state.cardAttr3,
      cardImage: state.cardImage,
      cardRare: state.cardRare,
      cardTrunfo: state.cardTrunfo,
    };

    this.setState((prevState) => ({
      deck: [...prevState.deck, newCard] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    }, this.validateTrunfo);

    console.log(state.deck);
  }

  validate() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const maxAttrPtsSum = 210;
    const maxAttrPts = 90;
    const minAttrPts = 0;
    const isAttr1OnRange = !!(cardAttr1 <= maxAttrPts && cardAttr1 >= minAttrPts);
    const isAttr2OnRange = !!(cardAttr2 <= maxAttrPts && cardAttr2 >= minAttrPts);
    const isAttr3OnRange = !!(cardAttr3 <= maxAttrPts && cardAttr3 >= minAttrPts);
    const ptsAttr1 = parseInt(cardAttr1, 10);
    const ptsAttr2 = parseInt(cardAttr2, 10);
    const ptsAttr3 = parseInt(cardAttr3, 10);
    const isAttrsOnRange = (ptsAttr1 + ptsAttr2 + ptsAttr3 <= maxAttrPtsSum);
    const fields = [cardName, cardImage, cardDescription];
    const emptyFields = fields.every((field) => field !== '');

    const isValid = (
      emptyFields
      && isAttr1OnRange
      && isAttr2OnRange
      && isAttr3OnRange
      && isAttrsOnRange
    );

    if (isValid) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  validateTrunfo() {
    const { deck } = this.state;
    const some = deck.some((card) => card.cardTrunfo === true);
    if (some) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  render() {
    const { state } = this;
    return (
      <div className="container">
        <Form
          cardName={ state.cardName }
          cardDescription={ state.cardDescription }
          cardAttr1={ state.cardAttr1 }
          cardAttr2={ state.cardAttr2 }
          cardAttr3={ state.cardAttr3 }
          cardImage={ state.cardImage }
          cardRare={ state.cardRare }
          cardTrunfo={ state.cardTrunfo }
          hasTrunfo={ state.hasTrunfo }
          isSaveButtonDisabled={ state.isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ state.cardName }
          cardDescription={ state.cardDescription }
          cardAttr1={ state.cardAttr1 }
          cardAttr2={ state.cardAttr2 }
          cardAttr3={ state.cardAttr3 }
          cardImage={ state.cardImage }
          cardRare={ state.cardRare }
          cardTrunfo={ state.cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
