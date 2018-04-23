import React from 'react'
import './Cell.css'

class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.showValue = this.showValue.bind(this);
	}

	showValue(event) {
		console.log(event.target.innerText)
		this.props.handler(event.target.innerText);
		event.target.style.color = 'black';
	}

	render() {
		return <div className="cell" onClick={this.showValue}>{this.props.value}</div>;
	}
}

export default Cell