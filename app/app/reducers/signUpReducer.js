import * as ActionTypes from "@constants/actionTypes";

export default function(state = null, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ActionTypes.SIGN_UP:
      console.log('reducer SIGN_UP')
      return newState;

    default:
      return state;
  }
}
