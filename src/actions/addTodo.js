import * as types from './actionTypes';

export const ADDTODO = 'ADDTODO';

export const addToDo = (item) => {
  console.log(item, ' dog')
  return {
    type: ADDTODO,
    todo: item
  }
}
