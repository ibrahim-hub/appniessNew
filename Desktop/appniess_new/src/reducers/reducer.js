import { FETCH_POSTS, AUTH_LOGIN, AUTH_FAIL } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case AUTH_LOGIN:
      return {
        ...state,
        item: action.payload
      };
    case AUTH_FAIL:
      return {
        ...state,
        item: action.payload
      };  
    default:
      return state;
  }
}
