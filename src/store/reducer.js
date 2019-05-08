import * as actionTypes from './actionTypes'

const initialState = {
  posts: [],
  singleData: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.posts
      }

    case actionTypes.GET_SINGLE_POST:
      return {
        ...state,
        singleData: action.post
      }
    default:
      return state
  }
}

export default reducer
