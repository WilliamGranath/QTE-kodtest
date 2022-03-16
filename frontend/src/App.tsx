import React from "react";
import CommentsList from "./components/commentsList";

function App() {
  return (
    <div>
      <p style={{fontWeight: "700",fontSize: "20px", textAlign: "center"}}>COMMENTS</p>
      <CommentsList />
    </div>
  );
}

export default App;
