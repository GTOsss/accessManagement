import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import main from './main';
import menu from './menu';
import menuAjax from './menu-ajax';

export default combineReducers({
  main,
  menu,
  menuAjax,
  routing: routerReducer,
});