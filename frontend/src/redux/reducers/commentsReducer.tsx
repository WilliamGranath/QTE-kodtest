import * as actionTypes from "../actions/actionTypes";
const initialState = {
  loading: false,
  error: null,
  items: [],
};  
const commentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.POST_COMMENT_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.POST_COMMENT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case actionTypes.POST_COMMENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case actionTypes.FETCH_COMMENTS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.FETCH_COMMENTS_SUCCES:
      return {
        ...state,
        error: null,
        loading: false,
        items: action.payload,
      };
    case actionTypes.FETCH_COMMENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default commentsReducer;
