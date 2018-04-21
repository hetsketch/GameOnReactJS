import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header/Header'
import Field from './components/Field/Field'
import './style.css'

// function App () {
// 	return (
// 		<div>
// 			<Header />          //ФУНКЦИИ
// 			<Field />
// 		</div>
// 	)
// }


class App extends React.Component {        //Классы
  render() {
    return (
		<div>
			<Header />
			<Field />
		</div>
	)
  }
}

render (<App />, document.getElementById('root'))