import React from 'react'
import './Cell.css'

class Cell extends React.Component {
	render() {

		function getKey(str){
      let key = 0;
      for (let i = 0; i < str.length; i++) {
        key += str.charCodeAt(i);
      }
      return key.toString();
    }

		const nums = this.props.nums;
    const items = nums.map((num) => {
    	const key = getKey(num)
    	return <div className="cell" key={key}>{num}</div>
    });
		return items
	}
}

export default Cell