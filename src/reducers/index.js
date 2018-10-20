import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import mission from './mission';

export default combineReducers({
    mission,
    routing: routerReducer,
});
