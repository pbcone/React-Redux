import { FETCH_POSTS, NEW_POST, TRIM } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  numPosts: 0
}

export default function (state= initialState, action){
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
        numPosts: action.payload.length
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      }
    case TRIM:
      console.log("this is case TRIM: ", action.payload);
      return {
        ...state,
        numPosts: action.payload
      }
    default:
      return state;
  }
}
