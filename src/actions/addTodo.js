import * as types from './actionTypes';

export const addToDo = (item) => {
  return {
    type: types.ADDTODO,
    todo: item
  }
}
