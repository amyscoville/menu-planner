import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import recipes from './recipes';
import recipe from './recipe';

export default createStore(combineReducers({ recipe, recipes }), applyMiddleware(thunk));