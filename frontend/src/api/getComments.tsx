const getAllComments = async () => {
  const response = await fetch("http://localhost:3000/comments");
 try {

 } catch (e) {
   
 }
 
  /*  const comments = await response.json()
  return comments; */
};

export default getAllComments;
