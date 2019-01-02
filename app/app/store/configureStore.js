import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from "redux-thunk";
import Reducers from '../reducers/index';

export default function configureStore (initialState) {

  const enhancer = compose(applyMiddleware(thunkMiddleware));
  const store = createStore(Reducers, initialState, enhancer);

  return store;
}
