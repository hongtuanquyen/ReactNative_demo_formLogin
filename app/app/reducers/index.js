import { combineReducers }        from 'redux';
import homeReducer          from './homeReducer';
import signInReducer          from './signInReducer';
import signUpReducer          from './signUpReducer';

const appReducer = combineReducers({
  homeReducer,
  signInReducer,
  signUpReducer 
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
