import actions from /* we need our action types here*/ "../actions";

import {
  FETCH_NAME_START,
  FETCH_NAME_SUCCESS,
  FETCH_NAME_FAILURE
} from '../actions';

const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
  , isLoading: false,
  photoOfTheDay: null,
  error: ''
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_NAME_START:
    // STEP IV - Handle the START action - it should return the new state
    // tree with isLoading: true, so that our UI transitions to the loading
    // state (Don't forget to add an isLoding bool to the initial state tree)
    return {
      ...state,
      error: '',
      isLoading: true
    };
  case FETCH_NAME_SUCCESS:
    // STEP VII - Handle the SUCCESS action - it should return the new state
    // tree with isLoading: false, so that our UI transitions from the loading
    // state to the success state
    return {
      ...state,
      error: '',
      isLoading: false,
      name: action.payload
    };
  case FETCH_NAME_FAILURE:
    // STEP XI - Handle the SUCCESS action - it should return the new state
    // tree with isLoading: false, so that our UI transitions from the loading
    // state to the success state (The UI was already built for this, so
    // now we're good to to!)
    return {
      ...state,
      isLoading: false,
      error: action.payload
    };
    default:
      return state;
  }
};
