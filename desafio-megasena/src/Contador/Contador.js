import React, { Component } from 'react';
import './Contador.css';

export default class Contador extends Component {
    state = {
      initialNumber: 0,
      increment: '',
    };

    acres = () => {
      const { initialNumber, increment } = this.state;
      this.setState({ initialNumber: initialNumber + increment})
    };

    // dois jeitos possíveis de fazer a mesma coisa:

    decres = () => {
      const { initialNumber, increment } = this.state;
      const valueTot = initialNumber - increment ;
      this.setState({ initialNumber: valueTot})
    };
    

    altIncr = (e) => {
      this.setState({increment: +e.target.value})
      // o '+' é pra transformar string em inteiro
    };

  render() {
    const { initialNumber, increment } = this.state;
    return (
      <div className='Contador'>Contador
        <h1> { initialNumber } </h1>

        <button
          type="button" 
         className='btn'
         onClick={this.acres}>+
        </button>
        {/* dois jeitos possíveis de fazer a mesma coisa: */}
        <button
          className='btn'
          type="button"
          onClick={() => this.decres()}>-
         </button>

        <label htmlFor='increm'>
            <input type="number"
             id='increm'
              value={ increment }
             onChange={ this.altIncr }/>
        </label>

      </div>
    )
  }
};