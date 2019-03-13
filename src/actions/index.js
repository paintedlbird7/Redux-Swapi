// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


import axios from 'axios';

export const FETCH_NAME_START = 'FETCH_NAME_START';
export const FETCH_NAME_SUCCESS = 'FETCH_NAME_SUCCESS';
export const FETCH_NAME_FAILURE = 'FETCH_NAME_FAILURE';

// STEP II build an action creator that returns a function
// instead of an action (inner function === thunk). The returned
// thunk gets called with "dispatch" as an argument

export const getName = () => dispatch => {
  // STEP III - dispatch he FETCH_PHOTO_START action to transition
  // to a "loading" state
  dispatch({ type: FETCH_NAME_START });
  // STEP VI - import axios, make an axios call to the NASA api now that
  // we have transitioned to a loading state. Make a get request with axios
  axios
    .get('https://swapi.co/api/people')
    .then(res => {
      // STEP VI - Handle the success state - dispatch the success action
      // with the data on the payload
      dispatch({ type: FETCH_NAME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // STEP X - Handle the error state - dispatch the error action
      // with the error message on the payload
      dispatch({
        type: FETCH_NAME_FAILURE,
        payload: err.response.data.error.message
      });
    });
};
