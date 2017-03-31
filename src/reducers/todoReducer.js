import * as types from '../actions/actionTypes';

const initialState = {
  todos: []
};

export default function toDoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADDTODO:
      return {
        ...state,
        todo
      };
    default:
      return state;
  }
}
