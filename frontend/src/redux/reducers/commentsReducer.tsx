import * as actionTypes from "../actions/actionTypes";
import { postComment, getComments } from "../../api";

const initialState = {
  loading: false,
  error: null,
  comments: [],
};
//Känns fel
const commentsReducer = async (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.POST_COMMENT:
      const { name, content } = action.payload;
      await postComment(name, content);
      return await getComments();
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
        comments: action.payload,
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
