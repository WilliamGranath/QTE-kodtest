import * as actionTypes from "../actions/actionTypes";
import { postComment, getComments } from "../../api";

const initialState = {
  comments: [],
};

const commentsReducer = async (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.POST_COMMENT:
      const { name, content } = action.payload;
      await postComment(name, content);
      return await getComments();
    case actionTypes.FETCH_COMMENTS:
      return await getComments();
    default:
      return state;
  }
};

export default commentsReducer;
