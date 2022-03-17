import React from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { connect } from "react-redux";
import { fetchComments } from "../redux/actions/index";
import Post from "./Post";

interface IProps {
  items: any;
}

const ExpandMore = styled((props: { [x: string]: any; expand: any }) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Posts: React.FC<IProps> = ({ items }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [renderComments, setRenderComments] = React.useState([]);
  const [visible, setVisible] = React.useState(0);

  const onClickReply = (itemId: number) => {
    setVisible(itemId);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderList = (): JSX.Element[] => {
    // Loop through items and find all replies
    // [C,C,C,C,R,C,R,C,R ...]
    const replies = items.filter((item: any) => item.replyingTo);
    const comments = items.filter((item: any) => !item.replyingTo);

    return comments
      ? comments.map((item: any, i: any) => {
          const repliesForThisComment = replies.filter(
            (reply: any) => reply.replyingTo === item.id
          );

          return (
            <Post
              item={item}
              renderComments={renderComments}
              repliesForThisComment={repliesForThisComment}
              handleExpandClick={handleExpandClick}
              visible={visible}
              onClickReply={onClickReply}
              ExpandMore={ExpandMore}
            />
          );
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

export default connect(mapState, mapDispatch)(Posts);
