import React from 'react'
import './Cell.css'

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.processClick = this.processClick.bind(this);
    this.state = {
      isVisible: false,
      isActive: true,
      isMatched: false
    }
  }

  processClick(event) {
    this.showValue();

    const prevValue = this.props.prevValue;
    const currentValue = event.target.innerHTML;

    if (prevValue != null) {
      if (prevValue.props.value == currentValue) {
        this.disableCell();
        this.markGreen();
        prevValue.disableCell();
        prevValue.markGreen();
        this.props.handler(null);
      } else {
        setTimeout(() => {
          this.hideValue();
          prevValue.hideValue();
          this.props.handler(null);
        }, 500);
      }
    } else {
      this.props.handler(this);
    }
  }

  render() {
    return <div
      className={'cell ' + (this.state.isVisible ? 'visible' : 'hidden') + ' ' + (this.state.isMatched ? 'is-green' : '')}
      onClick={this.state.isActive ? this.processClick : null}>{this.props.value}</div>;
  }

  showValue() {
    this.setState({isVisible: true});
  }

  hideValue() {
    this.setState({isVisible: false});
  }

  disableCell() {
    this.setState({isActive: false})
  }

  markGreen() {
    this.setState({isMatched: true})
  }
}

export default Cell