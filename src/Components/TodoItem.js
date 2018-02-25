import React, { Component } from 'react';
import Projects from "./Projects";
import PropTypes from "prop-types";

class TodoItem extends Component {

  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>

      </li>
    );
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object
}

export default TodoItem;
