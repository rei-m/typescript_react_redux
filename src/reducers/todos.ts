import {
  ADD_TODO,
  AddTodoAction,
  TOGGLE_TODO,
  ToggleTodoAction,
} from '../actions';
import { Todo } from '../reducers/index';

const todo = (state: Todo, action: AddTodoAction & ToggleTodoAction): Todo => {
  switch (action.type) {
    case ADD_TODO:
      return {
        completed: false,
        id: action.id,
        text: action.text,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });

    default:
      return state;
  }
};

const todos = (state: Todo[] = [], action: AddTodoAction & ToggleTodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo({
          completed: false,
          id: action.id,
          text: action.text,
        }, action),
      ];
    case TOGGLE_TODO:
      return state.map((t) =>
        todo(t, action),
      );
    default:
      return state;
  }
};

export default todos;
