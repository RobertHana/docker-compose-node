import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'inherit',
			color: this.props.todo.completed ? 'red' : 'inherit'
		}
	}

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" checked={this.props.todo.completed} onChange={this.props.markComplete.bind(this, id)} />
					{title}
					<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
				</p>
			</div >
		)
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	borderRadius: '50%',
	cursor: 'pointer',
	flat: 'right',
}

export default TodoItem;
