import {CALL_HISTORY_METHOD, LOCATION_CHANGE} from 'react-router-redux'

const SET_TRANSITION = 'pageTransition/SET_TRANSITION';

const initialState = {transition: null};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TRANSITION:
      return {transition: action.transition};
    case CALL_HISTORY_METHOD:
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
}

export function setPageTransition(transition) {
  return {
    type: SET_TRANSITION,
    transition,
  };
}

export function getPageTransition(globalState) {
  return globalState.pageTransition.transition;
}
