import React from "react";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default function Todo() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm />
        <TodoList />
      </div>
    );
  }

