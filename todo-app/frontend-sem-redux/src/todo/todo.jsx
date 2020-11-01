import React, { Component } from "react";

import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/TodoForm";
import TodoList from "../todo/TodoList";

import functions from './utils/functions'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };

    functions.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm
          description={this.state.description}
          handleAdd={functions.handleAdd}
          handleChange={functions.handleChange}
          handleSearch={functions.handleSearch}
          handleClear={functions.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={functions.handleRemove}
          handleMarkAsDone={functions.handleMarkAsDone}
          handleMarkAsPending={functions.handleMarkAsPending}
        />
      </div>
    );
  }
}
