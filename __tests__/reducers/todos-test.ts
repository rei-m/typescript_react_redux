import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../../src/actions';

jest.dontMock('../../src/reducers/todos');
import reducer from '../../src/reducers/todos';

describe('todos reducer', () => {
  it('should handle ADD_TODO', () => {
    const action = {
      id: 1,
      text: 'new todo',
      type: ADD_TODO,
    };

    const newState = reducer([], action);
    const expectedState = [{
      completed: false,
      id: 1,
      text: 'new todo',
    }];

    expect(newState).toEqual(expectedState);
  });

  it('should handle TOGGLE_TODO', () => {
    const action = {
      id: 1,
      type: TOGGLE_TODO,
    };

    const oldState = [{
      completed: false,
      id: 1,
      text: 'first todo',
    }, {
      completed: false,
      id: 2,
      text: 'second todo',
    }];

    const newState = reducer(oldState, action);
    const expectedState = [{
      completed: true,
      id: 1,
      text: 'first todo',
    }, {
      completed: false,
      id: 2,
      text: 'second todo',
    }];

    expect(newState).toEqual(expectedState);
  });
});
