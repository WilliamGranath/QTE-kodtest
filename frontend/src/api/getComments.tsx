const getAllComments = async () => {
  const comments = await fetch("http://localhost:3000/comments");
  const commentsJson = await comments.json();
  return commentsJson;
};

export default getAllComments;
