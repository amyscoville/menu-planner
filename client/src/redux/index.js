import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import recipes from './recipes';
import recipe from './recipe';
import menu from './menu';

export default createStore(combineReducers({ recipe, recipes, menu }), applyMiddleware(thunk));