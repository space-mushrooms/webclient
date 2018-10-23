import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import mission from './mission';
import pageTransition from './pageTransition';

export default combineReducers({
  mission,
  pageTransition,
  routing: routerReducer,
});
