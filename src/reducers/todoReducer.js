import * as actions from '../actions/addTodo';

const initialState = {
  todos: []
};

export default function toDoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.ADDTODO:
      return {
        ...state,
        todos: action.todo
      };
    default:
      return state;
  }
}
