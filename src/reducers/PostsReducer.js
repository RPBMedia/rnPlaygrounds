import { POSTS_FETCH_SUCCESS, POST_REQUEST_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  postList: [],
  requestResult: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      debugger;
      return {
        ...state,
        postList: action.payload
      };

    case POST_REQUEST_SUCCESS:
      debugger;
      return {
        ...state,
        requestResult: action.payload
      };

    default:
      return state;
  }
};
