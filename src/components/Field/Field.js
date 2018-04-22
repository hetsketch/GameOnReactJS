import React from 'react'
import Cell from '../Cell/Cell'
import './Field.css';

const inputArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

let nums = inputArray.sort(shuffle);

function shuffle(a, b) {                            
  return Math.random() - 0.5;
}

class Field extends React.Component {
  render() {
    return(
			<div className="game-wrapper">			
				<div id="game">
					<Cell nums={nums} />
				</div>
			</div>
		);
  }
}

export default Field

