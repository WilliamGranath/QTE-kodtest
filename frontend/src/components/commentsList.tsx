import React, { useState } from "react";
import Comment from "./comment"
import CommentForm from "./CommentForm";

export interface IState {
  people: {
    name: string;
    note?: string;
  }[];
}

function CommentList() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lovi",
      note: "Hello im cool",
    },
  ]);
  return (
    <div>
      <Comment people={people} />
      <CommentForm setPeople={setPeople} people={people} />
    </div>
  );
}

export default CommentList

// lista för möte med matt
//1. fixa så reply fungerar
//2. backend, server fix.
//3. koppla ihop de med frontend
