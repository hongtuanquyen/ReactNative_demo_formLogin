import * as ActionTypes from "@constants/actionTypes";

export default function(state = null, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      console.log('reducer SIGN_IN')
      return newState;

    default:
      return state;
  }
}
