import * as actionTypes from "./actionTypes";
//Känns fel
export const postComment = (name: string, content: string) => {
  return { type: actionTypes.POST_COMMENT, payload: { name, content } };
};
export const getComments = () => {
  return { type: actionTypes.FETCH_COMMENTS };
};
