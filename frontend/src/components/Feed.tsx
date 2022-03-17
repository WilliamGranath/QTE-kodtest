import Posts from "./Posts";
import CommentForm from "./CommentForm";

export interface IState {
  people: {
    name: string;
    note?: string;
  }[];
  items: any;
}

function Feed() {
  return (
    <div>
      <Posts items={undefined} />
      <CommentForm />
    </div>
  );
}

export default Feed;

// lista för möte med matt
//1. fixa så reply fungerar
//2. backend, server fix.
//3. koppla ihop de med frontend
