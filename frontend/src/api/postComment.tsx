const postComment = async (name: string, content: string) => {
    await fetch("http://localhost:3000/comment", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name, content }),
})
};

export default postComment;
