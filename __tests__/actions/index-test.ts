jest.dontMock('../../src/actions/');
import {
  ADD_TODO,
  addTodo,
  SET_VISIBILITY_FILTER,
  setVisibilityFilter,
  TOGGLE_TODO,
  toggleTodo,
} from '../../src/actions/';

describe('TodoActionCreator', () => {
  it('should create addTodo Action', () => {
    const action1 = addTodo('new Todo');
    const action2 = addTodo('next Todo');
    const expectedAction1 = {
      id: 0,
      text: 'new Todo',
      type: ADD_TODO,
    };

    const expectedAction2 = {
      id: 1,
      text: 'next Todo',
      type: ADD_TODO,
    };
    expect(action1).toEqual(expectedAction1);
    expect(action2).toEqual(expectedAction2);
  });

  it('should create toggleTodo Action', () => {
    const action = toggleTodo(1);
    const expectedAction = {
      id: 1,
      type: TOGGLE_TODO,
    };
    expect(action).toEqual(expectedAction);
  });

  it('should create setVisibilityFilter Action', () => {
    const action = setVisibilityFilter('Filter');
    const expectedAction = {
      filter: 'Filter',
      type: SET_VISIBILITY_FILTER,
    };
    expect(action).toEqual(expectedAction);
  });
});
