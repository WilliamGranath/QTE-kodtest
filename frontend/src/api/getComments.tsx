const getComments = async () => {
  const comments = await fetch("http://localhost:3000/comments");
  const commentsJson = await comments.json();
  const a = await commentsJson;
  console.log(a);
  return commentsJson;
};

export default getComments;
