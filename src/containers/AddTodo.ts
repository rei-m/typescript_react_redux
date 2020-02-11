import { connect } from 'react-redux';
import { addTodo, AddTodoAction } from '../actions';
import AddTodoForm from '../components/AddTodoForm';
import { Dispatch } from 'redux';

export interface Props {}

const mapDispatchToProps = (
  dispatch: Dispatch<AddTodoAction>,
  _props: Props
) => {
  return {
    onSubmit: (name: string) => {
      dispatch(addTodo(name));
    },
  };
};

const AddTodo = connect(undefined, mapDispatchToProps)(AddTodoForm);

export default AddTodo;
