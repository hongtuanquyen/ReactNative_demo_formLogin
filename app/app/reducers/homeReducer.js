import * as ActionTypes from "@constants/actionTypes";

export default function(state = null, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ActionTypes.UPDATE_LIST:   
      newState.listItem = action.listItem; 
      return newState;

    default:
      return state;
  }
}
