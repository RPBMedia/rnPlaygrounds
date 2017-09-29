import _ from 'lodash';
import axios from 'axios';

import { POSTS_FETCH_SUCCESS, POST_REQUEST_SUCCESS } from './types';

export const postsFetch = () => async dispatch => {
  const requestUrl = 'https://jsonplaceholder.typicode.com/posts';

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

export const postRequest = () => async dispatch => {
  const requestUrl = 'https://www.oneplanetrating.org/api/review/create/';
  const authToken = 'Token e1beceb41cef89c7d31b6b2404f626ddab2b2706';

  const conf = {
    headers: {
      Authorizarion: authToken
    }
  };

  const instance = axios.create({
    baseURL: requestUrl,
    timeout: 3000
  });
  instance.defaults.headers.common["Authorization"] = authToken;

  const data = {
    place_id: 'ChIJywtkGTF2X0YRZnedZ9MnDag',
    when: '2017-05-01',
    title: 'Sdasdasdasdasdasdasd',
    content: 'Dasdasdasdasdasda',
    type: 'Couple',
    category_General: 4,
    category_Environmental: 3,
    category_Social: 2,
    category_Cultural: 1
  };

  try {
    console.log('POSTING: ', requestUrl, data, conf);
    debugger;
    const response = await instance.post(requestUrl, data);
    debugger;
    dispatch({
      type: POST_REQUEST_SUCCESS,
      payload: response.data.detail
    });
  } catch (error) {
    debugger;
    console.log('Error in the request: ', error);
    return error;
  }
};
