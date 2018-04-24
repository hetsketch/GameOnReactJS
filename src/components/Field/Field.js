import React from 'react'
import Cell from '../Cell/Cell'
import './Field.css';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
      prevValue: null
    };
    this.shuffle = this.shuffle.bind(this);
    this.setPrevValue = this.setPrevValue.bind(this);
  }

  setPrevValue(value) {
    this.setState({
      prevValue: value
    });
  }

  shuffle() {
    this.setState((prevState) => {
      return {
        nums: prevState.nums.sort(() => Math.random() - 0.5)
      }
    });
  }

  componentWillMount() {
    this.shuffle();
  }

  render() {
    const items = this.state.nums.map((value) =>
      <Cell value={value} handler={this.setPrevValue} prevValue={this.state.prevValue}/>
    );
    return (
      <div className="game-wrapper">
        <button onClick={this.shuffle}>Shuffle</button>
        <div id="game">
          {items}
        </div>
      </div>
    );
  }
}

export default Field
