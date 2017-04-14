import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';
export default function ConfigureStore(initialState) {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));
  return store;
}