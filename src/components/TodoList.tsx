import React from 'react';
import Todo, { Props as TodoProps } from './Todo';

export interface Props extends React.Props<{}> {
  todos: TodoProps[];
  onTodoClick: (id: number) => void;
}

const TodoList = (props: Props): JSX.Element => {
  const todoElements = props.todos.map(todo => (
    <Todo key={todo.id} {...todo} onClick={props.onTodoClick} />
  ));

  return <ul>{todoElements}</ul>;
};

export default TodoList;
