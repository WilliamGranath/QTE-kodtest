import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../redux/actions/index";
import Comment from "./Comment";

interface IProps {
  replies: any;
}

const Comments: React.FC<IProps> = ({ replies }) => {
  

  const renderList = (): JSX.Element[] => {
    return replies
      ? replies.map((reply: any, i: any) => {
          return <Comment reply={reply} />;
        })
      : null;
  };

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};
const mapState = (state: any) => {
  return {
    ...state.comments,
  };
};
const mapDispatch = (dispatch: any) => {
  return {
    fetchComments: () => dispatch(fetchComments()),
  };
};

export default connect(mapState, mapDispatch)(Comments);
