import _ from 'lodash';
import axios from 'axios';

import { POSTS_FETCH_SUCCESS, POST_REQUEST_SUCCESS } from './types';

export const postsFetch = () => async dispatch => {
  var requestUrl = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await axios.get(requestUrl);

    dispatch({
      type: POSTS_FETCH_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.log('Error in the request: ', error);
    return error;
  }
};

export const postRequest = () => dispatch => {
  var requestUrl = 'https://jsonplaceholder.typicode.com/posts';

  // try {
  //
  //   const response = await axios.get(requestUrl);

    dispatch({
      type: POST_REQUEST_SUCCESS,
      payload: 'test'
    });
  // } catch (error) {
  //   console.log('Error in the request: ', error);
  //   return error;
  // }
};
