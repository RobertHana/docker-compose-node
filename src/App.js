import axios from 'axios';
// import uuid from 'uuid';

import { BrowserRouter } from 'react-router-dom';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import Modal from 'react-modal';
import React from 'react';

import { Modal1, Modal2 } from './components/Modals';
import { ModalProvider, ModalConsumer } from './components/ModalContext';
import About from './pages/About';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import ModalRoot from './components/ModalRoot';
import Todos from './components/Todos';

import './App.css';

Modal.setAppElement("#root")

class App extends Component {
	state = {
		todos: [],
	}

	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
			.then(response => this.setState({ todos: response.data }))
	}

	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo;
			})
		})
	}
	delToDo = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(response => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
	}
	addTodo = (title) => {
		// const newTodo = {
		// 	id: uuid.v4(),
		// 	title, // ES6: equiv to title: title (since title param matches by name)
		// 	completed: false
		// }
		// this.setState({ todos: [...this.state.todos, newTodo] })
		axios.post("https://jsonplaceholder.typicode.com/todos", {
			title,
			completed: false
		})
			.then(response => this.setState({ todos: [...this.state.todos, response.data] }))
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<div className="container">
						<Header />
						<Route exact path="/" render={props => (
							<React.Fragment>
								<Todos todos={this.state.todos}
									markComplete={this.markComplete}
									delTodo={this.delToDo}
								/>
								<AddTodo addTodo={this.addTodo} />
								<ModalProvider>
									<ModalRoot />
									<ModalConsumer>
										{({ showModal }) => (
											<React.Fragment>
												<button onClick={() => showModal(Modal1)}>Open Modal</button>
												<button onClick={() => showModal(Modal2, { title: 'Edit' })}>Edit</button>
												<button onClick={() => showModal(Modal2, { title: 'New' })}>New</button>
											</React.Fragment>
										)}
									</ModalConsumer>
								</ModalProvider>
							</React.Fragment>
						)} />
						<Route exact path="/about" component={About} />
					</div>
				</div>
			</BrowserRouter >
		);
	}
}


export default App;
