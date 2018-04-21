import React from 'react'
import Cell from '../Cell/Cell'
import './Field.css';

// function Field () {
// 	return (
// 		<div className="game-wrapper">         //ФУНКЦИИ
// 			<div id="game"> 
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 				<Cell />
// 			</div>
// 		</div>
// 	)
// }


class Field extends React.Component {             //Классы
  render() {
    return (
		<div className="game-wrapper">			
			<div id="game">
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
			</div>
		</div>
	)
  }
}

export default Field