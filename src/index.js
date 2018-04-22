import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Field from './components/Field/Field';
import './style.css';
  
class App extends React.Component {
  render() {
    return(
		<div>
			<Header />
			<Field />
		</div>
	)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

