import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ADD_TODO, VisibilityFilter } from '../../src/actions';
import AddTodoForm from '../../src/components/AddTodoForm';
import { GlobalState } from '../../src/reducers/';

jest.dontMock('../../src/containers/AddTodo');
import AddTodo from '../../src/containers/AddTodo';

const state: GlobalState = {
  todos: [],
  visibilityFilter: VisibilityFilter.SHOW_ALL,
};

const store: any = configureStore<GlobalState>()(state);

describe('<AddTodo />', () => {

  let container: ReactWrapper<any, any>;
  let component: ReactWrapper<any, any>;

  beforeEach(() => {
    spyOn(store, 'dispatch');
    const wrapper = mount(
      <Provider store={store}>
        <AddTodo />
      </Provider>,
    );
    container = wrapper.find(AddTodo);
    component = container.find(AddTodoForm);
  });

  it('should render', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('sets the AddTodo prop on the AddTodoForm Component', () => {
    component.props().onSubmit('todo test');
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: ADD_TODO, id: 0, text: 'todo test' },
    );
  });
});
