import React, { Component } from 'react';

import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
  deleteTask() {
    Tasks.remove(this.props.task._id);
  }

  toggleComplete() {
    Tasks.update(this.props.task._id, {
      $set: { completed: ! this.props.task.completed }
    })
  }

  render() {
    const taskClassName = this.props.task.completed ? 'checked' : '';
    return (
      <li className={ taskClassName }>
        <button className="delete" onClick={this.deleteTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={!! this.props.task.completed}
          onClick={this.toggleComplete.bind(this)}
        />
        {this.props.task.text}
      </li>
    );
  }
}
