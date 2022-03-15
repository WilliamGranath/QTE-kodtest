import * as actionTypes from "./actionTypes";
//Känns fel
export const postComment = (name: string, content: string) => {
  return { type: actionTypes.POST_COMMENT, payload: { name, content } };
};
export const fetchCommentsStart = () => {
  return { type: actionTypes.FETCH_COMMENTS_START };
};

export const fetchCommentsFail = (error: any) => {
  return {
    type: actionTypes.FETCH_COMMENTS_FAIL,
    payload: error,
  };
};

export const fetchCommentsSucces = () => {
  return {
    type: actionTypes.FETCH_COMMENTS_SUCCES
  }
}

export const fetchComments = () => {
  return async (dispatch: any) => {
    dispatch(fetchCommentsStart());
    try {
      const comments = await fetch("http://localhost:3000/comments");
      dispatch(fetchCommentsSucces())
    } catch (error) {
      dispatch(fetchCommentsFail(error));
    }
  };
};
