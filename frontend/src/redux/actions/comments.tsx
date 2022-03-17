import * as actionTypes from "./actionTypes";

export const postCommentStart = () => {
  return { type: actionTypes.POST_COMMENT_START };
};
export const postCommentSuccess = () => {
  return { type: actionTypes.POST_COMMENT_SUCCESS };
};
export const postCommentFail = (error: any) => {
  return { type: actionTypes.POST_COMMENT_FAIL, payload: error };
};
export const postComment = (name: string, content: string, replyingTo: any) => {
  return async (dispatch: any) => {
    dispatch(postCommentStart());
    try {
      const response = await fetch("http://localhost:3000/comment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, content, replyingTo }),
      });
      if (response.ok) {
        dispatch(postCommentSuccess());
        dispatch(fetchComments());
      }
    } catch (e) {
      dispatch(postCommentFail(e));
    }
  };
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

export const fetchCommentsSucces = (items: any) => {
  return {
    type: actionTypes.FETCH_COMMENTS_SUCCES,
    payload: items,
  };
};

export const fetchComments = () => {
  return async (dispatch: any) => {
    dispatch(fetchCommentsStart());
    try {
      const response = await fetch("http://localhost:3000/comments");
      if (response.ok) {
        const comments = await response.json();
        console.log(comments);
        dispatch(fetchCommentsSucces(comments));
      }
    } catch (error) {
      dispatch(fetchCommentsFail(error));
    }
  };
};
